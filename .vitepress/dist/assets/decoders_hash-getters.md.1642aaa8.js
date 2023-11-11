import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.6d94f49f.js";const E=JSON.parse('{"title":"Hash Getters","description":"","frontmatter":{},"headers":[],"relativePath":"decoders/hash-getters.md","filePath":"decoders/hash-getters.md","lastUpdated":1699680977000}'),t={name:"decoders/hash-getters.md"},o=n(`<h1 id="hash-getters" tabindex="-1">Hash Getters <a class="header-anchor" href="#hash-getters" aria-label="Permalink to &quot;Hash Getters&quot;">​</a></h1><p>The term <a href="/decoders/hash-getters.html">Hash Getters</a> might sound a bit arcane, but it&#39;s a concept vital to the <code>Plug</code> framework.</p><p>This page aims to demystify hashGetters, delve into the importance of EIP-712 type hashes, and provide you with the knowledge required to understand the Hash Getters feature in Plug.</p><h2 id="what-are-hashes" tabindex="-1">What Are Hashes? <a class="header-anchor" href="#what-are-hashes" aria-label="Permalink to &quot;What Are Hashes?&quot;">​</a></h2><p>Let&#39;s start with the basics. A hash is a unique representation of data that is generated through a mathematical function.</p><p>Let&#39;s look at a very simple hashing function:</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> data</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">char</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> char.</span><span style="color:#B392F0;">charCodeAt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hash</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> data</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">((</span><span style="color:#E36209;">char</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> char.</span><span style="color:#6F42C1;">charCodeAt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>If we call the <code>hash</code> function in this example with the string <code>hello</code>, we will get the following result:</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// * We can now have a hash reference for the string &#39;hello&#39;</span></span>
<span class="line"><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;104.101.108.108.111&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// * Hello and goodbye have different hashes</span></span>
<span class="line"><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;goodbye&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;103.111.111.100.98.121.101&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// * The hash function returns the same hash for the same data.</span></span>
<span class="line"><span style="color:#B392F0;">hash</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;104.101.108.108.111&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;">// * We can now have a hash reference for the string &#39;hello&#39;</span></span>
<span class="line"><span style="color:#6F42C1;">hash</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;104.101.108.108.111&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// * Hello and goodbye have different hashes</span></span>
<span class="line"><span style="color:#6F42C1;">hash</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;goodbye&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;103.111.111.100.98.121.101&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// * The hash function returns the same hash for the same data.</span></span>
<span class="line"><span style="color:#6F42C1;">hash</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;104.101.108.108.111&quot;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This is a very simple example, but it illustrates the basic concept of a hash. The function takes in a string and returns a unique representation of that string.</p><p>In the realm of blockchain and cryptographic technologies, hashes serve to protect data integrity. <strong>In simpler terms, if we hash different data we will get different hashes.</strong> If we hash the same data, we will always get the same hash. This is the basis of the <code>Plug</code> framework.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When building a dApp or API that consumes typed data, you should store intent declarations by their reference hash while only storing one instance of the decoded data itself.</p><p>This way, instead of storing a massive amount of payloads in a database or in memory, it&#39;s just a matter of storing a reference to the hash and lazy-loading the data when needed.</p></div><h2 id="eip-712-type-hashes" tabindex="-1">EIP-712 Type Hashes <a class="header-anchor" href="#eip-712-type-hashes" aria-label="Permalink to &quot;EIP-712 Type Hashes&quot;">​</a></h2><p>When we talk about <a href="/decoders/eip-712.html">EIP-712</a>, we are referring to <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" rel="noreferrer">Ethereum Improvement Proposal 712</a>, a standard that specifies a methodology for creating typed, structured data hashes.</p><p>A type hash extends the idea of the basic hashes we just discussed by introducing the ability to recover the original data from the hash. This is done by using a hashing function that can be both encoded and decoded.</p><p>The EIP-712 standard is crucial because it provides a clear, user-friendly way to understand and confirm what you are signing or authorizing. With a simple architecture EVM developers and users gain access to:</p><ul><li><p><strong>Human-Readable Information:</strong> The structured data in EIP-712 is both machine and human-readable, offering a transparent representation of the transaction.</p></li><li><p><strong>Secure &amp; Verifiable:</strong> It helps to create a unique and tamper-proof signature, ensuring secure transactions.</p></li><li><p><strong>Standardization:</strong> By adhering to a common standard, it ensures compatibility and interoperability among various Ethereum-based platforms and applications.</p></li></ul><h2 id="onchain-getters" tabindex="-1">Onchain Getters <a class="header-anchor" href="#onchain-getters" aria-label="Permalink to &quot;Onchain Getters&quot;">​</a></h2><p>Hash Getters are specialized functions within the <code>Plug</code> framework that facilitate the retrieval of message hashes.</p><p>What many don&#39;t fully comprehend at first, is that when you are working with a blockchain signtaure you have to be able to verify any of the data that is provided in the message.</p><p>This means, that if we have a signature that says &#39;Spongebob aired at 4pm yesterday,&#39; but have no way to prove it onchain, then the signature is useless. In effect, it represents data that could be false even though it&#39;s been signed.</p><p>Hash Getters solve this by enabling smart contracts to look at the message and signature provided and confirm that everything can be verified. With a unique hash for each message and type of data, smart contracts can verify the integrity of the data provided in the message in just a couple lines of <code>Solidity</code>.</p>`,22),l=[o];function p(r,c,i,h,d,y){return a(),e("div",null,l)}const g=s(t,[["render",p]]);export{E as __pageData,g as default};
