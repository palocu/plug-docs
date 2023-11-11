import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6d94f49f.js";const u=JSON.parse('{"title":"Intent","description":"A Intent data type provides EIP-712 compatability for encoding and decoding.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Intent"}],["meta",{"name":"description","content":"A Intent data type provides EIP-712 compatability for encoding and decoding."}],["meta",{"property":"og:description","content":"A Intent data type provides EIP-712 compatability for encoding and decoding."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/base-types/Intent.md","filePath":"generated/base-types/Intent.md","lastUpdated":1699736593000}'),t={name:"generated/base-types/Intent.md"},p=e(`<h1 id="intent" tabindex="-1">Intent <a class="header-anchor" href="#intent" aria-label="Permalink to &quot;Intent&quot;">​</a></h1><p>A <a href="/generated/base-types/Intent.html">Intent</a> data type provides EIP-712 compatability for encoding and decoding the data needed for an <code>Intent</code> to be securely distributed and executed.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Inside the declaration of a <code>Intent</code> data type there are nested <a href="/generated/base-types/Transaction.html">Transaction</a> and <a href="/generated/base-types/SignedPermission.html">SignedPermission</a> data types that need to be built independently.</p></div><h2 id="the-data-type" tabindex="-1">The Data Type <a class="header-anchor" href="#the-data-type" aria-label="Permalink to &quot;The Data Type&quot;">​</a></h2><p>To interact with the data type onchain will you need both the <code>Typescript</code> and <code>EIP-712</code> representations of the <code>Intent</code> data type:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UxW0o" id="tab-sn331r_" checked="checked"><label for="tab-sn331r_">Typescript/Javascript</label><input type="radio" name="group-UxW0o" id="tab-Z9rftmr"><label for="tab-Z9rftmr">EIP-712</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">transaction</span><span style="color:#E1E4E8;">: Transaction,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">authority</span><span style="color:#E1E4E8;">: Array</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">SignedPermission</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">transaction</span><span style="color:#24292E;">: Transaction,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">authority</span><span style="color:#24292E;">: Array</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">SignedPermission</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;transaction&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Transaction&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;authority&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;SignedPermission[]&#39;</span><span style="color:#E1E4E8;"> } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;transaction&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Transaction&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;authority&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;SignedPermission[]&#39;</span><span style="color:#24292E;"> } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>Typescript</code> representation is used to build and work with the object in your dApp and API while the <code>EIP-712</code> representation is used to encode and decode the data type onchain.</p></div><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>transaction</code> and <code>authority</code> as the fields of the <code>Intent</code> data type we can generate the type hash as follows:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wL-Sj" id="tab-Cf9HCA0" checked="checked"><label for="tab-Cf9HCA0">Verbose.sol</label><input type="radio" name="group-wL-Sj" id="tab-7jExxU0"><label for="tab-7jExxU0">Inline.sol</label><input type="radio" name="group-wL-Sj" id="tab-t8Rka-i"><label for="tab-t8Rka-i">Hash.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> INTENT_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Intent(&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;Transaction transaction&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;SignedPermission[] authority&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> INTENT_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Intent(&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;Transaction transaction&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;SignedPermission[] authority&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> INTENT_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Intent(Transaction transaction,SignedPermission[] authority)Caveat(address enforcer,bytes terms)Permission(address delegate,bytes32 authority,Caveat[] caveats,bytes32 salt)SignedPermission(Permission permission,bytes signature)Transaction(address to,uint256 gasLimit,bytes data)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> INTENT_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Intent(Transaction transaction,SignedPermission[] authority)Caveat(address enforcer,bytes terms)Permission(address delegate,bytes32 authority,Caveat[] caveats,bytes32 salt)SignedPermission(Permission permission,bytes signature)Transaction(address to,uint256 gasLimit,bytes data)&#39;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> INTENT_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0xd9bb328c7e9566be7e4234690b8b57f31b3fc83901c22cd43fcbd99e107f0019</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> INTENT_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0xd9bb328c7e9566be7e4234690b8b57f31b3fc83901c22cd43fcbd99e107f0019</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>`,10),o=[p];function l(c,r,i,d,y,E){return a(),n("div",null,o)}const h=s(t,[["render",l]]);export{u as __pageData,h as default};
