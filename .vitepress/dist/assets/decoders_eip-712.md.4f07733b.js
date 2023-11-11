import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.6d94f49f.js";const y=JSON.parse('{"title":"EIP-712","description":"","frontmatter":{},"headers":[],"relativePath":"decoders/eip-712.md","filePath":"decoders/eip-712.md","lastUpdated":1699680977000}'),n={name:"decoders/eip-712.md"},o=t(`<h1 id="eip-712" tabindex="-1">EIP-712 <a class="header-anchor" href="#eip-712" aria-label="Permalink to &quot;EIP-712&quot;">​</a></h1><p><a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" rel="noreferrer">EIP-712</a> proposes a standard for the hashing and signing of structured data, unlike previous raw data or <a href="https://eips.ethereum.org/EIPS/eip-191" target="_blank" rel="noreferrer">EIP-191 signatures</a>. The goal is to present the signed data in a readable format, so users know what they&#39;re signing.</p><p>Think of it like a well-structured contract with clearly stated terms, compared to a long and unreadable string of text. <code>Plug</code> takes advantage of this standard to create human-readable, off-chain messages that users can understand and agree to by signing offchain.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This gets quite technical. If you are struggling to understand and are not a developer, you can skip this section and come back to it later once you&#39;re ready. It is not required to understand the experience you will have with <code>Plug</code> as an end-user.</p></div><h2 id="the-problem" tabindex="-1">The Problem <a class="header-anchor" href="#the-problem" aria-label="Permalink to &quot;The Problem&quot;">​</a></h2><p>Without <a href="/decoders/eip-712.html">EIP-712</a>, signing a message or transaction in the blockchain world could be pretty confusing. Imagine you&#39;re signing a digital document, but all you see is a string of random letters and numbers. You have no idea what you&#39;re agreeing to; it might as well be a foreign language. What does <code>0x1c8e9d3c</code> mean? What about <code>0x1c8e9d3c1c8e9d3c1c8e9d3c1c8e9d3c</code>? <strong>It&#39;s impossible to tell.</strong></p><p>This is risky and unclear, akin to blindly signing a contract without reading it, simply because the document is too complicated to understand. In such a scenario, misunderstandings are bound to happen, and you might agree to terms you never intended to.</p><p>This is the problem that EIP-712 solves.</p><h2 id="structured-data-and-signing" tabindex="-1">Structured Data and Signing <a class="header-anchor" href="#structured-data-and-signing" aria-label="Permalink to &quot;Structured Data and Signing&quot;">​</a></h2><p><a href="/decoders/eip-712.html">EIP-712</a> changes this by structuring the data in a human-readable format. It essentially translates that &quot;foreign language&quot; into clear and simple English (or any language you&#39;re comfortable with). This way, when you&#39;re about to sign something, you know exactly what you&#39;re getting into.</p><p>With this simple change, all consumers benefit through improved:</p><ul><li><p><strong>Transparency:</strong> You see in plain text what you&#39;re signing.</p></li><li><p><strong>Security:</strong> A clear understanding of what you&#39;re signing.</p></li><li><p><strong>Ease of Use:</strong> Requires no technical background to understand what you&#39;re signing.</p></li><li><p><strong>Trust:</strong> You can trust that you&#39;re signing what you think you&#39;re signing.</p></li></ul><h2 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h2><p>To understand how EIP-712 works, let&#39;s go through a basic example. Imagine you want to make a simple agreement, something like &quot;<em>I will pay you 10 coins</em>.&quot;</p><h3 id="the-message-hash" tabindex="-1">The Message Hash <a class="header-anchor" href="#the-message-hash" aria-label="Permalink to &quot;The Message Hash&quot;">​</a></h3><p>In the pre-EIP-712 world, this agreement might look like a jumbled mess of characters when it&#39;s hashed (converted into a fixed-size string of characters). Let&#39;s pretend it turns into something like <code>0xabc123</code>. With EIP-712, the same agreement is structured and then hashed like:</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">hashStruct</span><span style="color:#E1E4E8;">(types, </span><span style="color:#9ECBFF;">&quot;Agreement&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  agreement: </span><span style="color:#9ECBFF;">&quot;I will pay you 10 coins&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&quot;Your address&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&quot;Receiver&#39;s address&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">hashStruct</span><span style="color:#24292E;">(types, </span><span style="color:#032F62;">&quot;Agreement&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  agreement: </span><span style="color:#032F62;">&quot;I will pay you 10 coins&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&quot;Your address&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&quot;Receiver&#39;s address&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>In these few lines of code, we provide all the types used inside the message being signed, the name of the type, and the message we want to hash. This structured data is then hashed, but here&#39;s the magic: <strong>Because of the structure, the hash now represents the entire content in a unique but still understandable way.</strong> Let&#39;s say it turns into <code>0xdef456</code>.</p><p>Obviously, this still results in a hash and that is not very helpful. But, we can use this hash to parse and verify the human-readable message used to create it.</p><h3 id="the-signature" tabindex="-1">The Signature <a class="header-anchor" href="#the-signature" aria-label="Permalink to &quot;The Signature&quot;">​</a></h3><p>Now, let&#39;s say you want to sign this agreement.</p><p>In the pre-EIP-712 world, you would sign the hash <code>0xabc123</code>. But with EIP-712, you sign the structured data hash <code>0xdef456</code> and inform the receiver that you&#39;re signing the agreement &#39;<em>I will pay you 10 coins</em>&#39; that is hashed to <code>0xdef456</code>.</p><p>To verify and execute the action declared in the signature the receiver will get the signature and the structured data hash. They can then verify that the signature is valid by hashing the structured data and comparing it to the signature. If they hash the message and the contents match, the signature is valid. If they don&#39;t, the signature is invalid.</p><p>With EIP-712 a receiver has the capability to:</p><ul><li>Verify the <code>Signer</code> (signature).</li><li>Verify the contents of the hash.</li></ul><h3 id="onchain-verification" tabindex="-1">Onchain Verification <a class="header-anchor" href="#onchain-verification" aria-label="Permalink to &quot;Onchain Verification&quot;">​</a></h3><p>The magic doesn&#39;t stop there: <strong>You can actually verify these typed contents directly on-chain.</strong> While we have only focused on the message being human-readable up to this point, it is vital to fully comprehend that the message and signature are also machine-readable.</p><p>This means that smart contracts can be programmed to recognize the message and signature and check that it matches the initial agreement&#39;s parameters. This allows for strong, cryptographic proof that the transaction is what it claims to be, right there on the blockchain.</p><h3 id="domain-specification" tabindex="-1">Domain Specification <a class="header-anchor" href="#domain-specification" aria-label="Permalink to &quot;Domain Specification&quot;">​</a></h3><p>The last piece of the puzzle is the <code>domain</code> specification. I had skipped over this to keep things simple, but you&#39;re ready to understand it now. The <code>domain</code> is a set of parameters that are used to specify the context of the message. It is a way to ensure that the message is only valid in a specific context.</p><p>For example, if you are signing a message to transfer tokens, you would want to ensure that the message is only valid for the token contract that you are transferring tokens from. In EIP-712, the <code>domain</code> is declared like:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;My Dapp&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;chainId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;verifyingContract&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0xdeadbeef&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;My Dapp&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;chainId&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;verifyingContract&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0xdeadbeef&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Without a <code>domain</code> specification, you could sign a message to transfer tokens from one contract and then use that same signature to transfer tokens from another contract. Needless to say (I am saying it anyways), this is obviously not ideal!</p><p>To ensure that the message is only valid in a specific context, the <code>domain</code> is hashed and then prepended to the message hash (your nested <a href="/decoders/eip-712/signed-pairs.html">SignedPair</a> type). This ensures that the message is only valid in the context of the <code>domain</code> that was specified and prevents the message from being used in a different context.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When using the <code>Plug</code> library for your dApp this is automatically.</p></div>`,35),i=[o];function r(l,p,c,h,d,u){return a(),s("div",null,i)}const m=e(n,[["render",r]]);export{y as __pageData,m as default};
