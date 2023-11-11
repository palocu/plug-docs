import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.6d94f49f.js";const u=JSON.parse('{"title":"EIP712Domain","description":"A EIP712Domain data type provides EIP-712 compatability for encoding and decoding.","frontmatter":{"head":[["meta",{"property":"og:title","content":"EIP712Domain"}],["meta",{"name":"description","content":"A EIP712Domain data type provides EIP-712 compatability for encoding and decoding."}],["meta",{"property":"og:description","content":"A EIP712Domain data type provides EIP-712 compatability for encoding and decoding."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/base-types/EIP712Domain.md","filePath":"generated/base-types/EIP712Domain.md","lastUpdated":1699736593000}'),e={name:"generated/base-types/EIP712Domain.md"},l=p(`<h1 id="eip712domain" tabindex="-1">EIP712Domain <a class="header-anchor" href="#eip712domain" aria-label="Permalink to &quot;EIP712Domain&quot;">​</a></h1><p>A <a href="/generated/base-types/EIP712Domain.html">EIP712Domain</a> data type provides EIP-712 compatability for encoding and decoding the data needed for an <code>Intent</code> to be securely distributed and executed.</p><h2 id="the-data-type" tabindex="-1">The Data Type <a class="header-anchor" href="#the-data-type" aria-label="Permalink to &quot;The Data Type&quot;">​</a></h2><p>To interact with the data type onchain will you need both the <code>Typescript</code> and <code>EIP-712</code> representations of the <code>EIP712Domain</code> data type:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EAq_p" id="tab-xZoMKRF" checked="checked"><label for="tab-xZoMKRF">Typescript/Javascript</label><input type="radio" name="group-EAq_p" id="tab-tmq5VRQ"><label for="tab-tmq5VRQ">EIP-712</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: string,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">: string,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">chainId</span><span style="color:#E1E4E8;">: bigint,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">verifyingContract</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: string,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">: string,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">chainId</span><span style="color:#24292E;">: bigint,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">verifyingContract</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0x\${string}&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;version&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;chainId&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;verifyingContract&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;version&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;chainId&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;verifyingContract&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>Typescript</code> representation is used to build and work with the object in your dApp and API while the <code>EIP-712</code> representation is used to encode and decode the data type onchain.</p></div><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>name</code>, <code>version</code>, <code>chainId</code> and <code>verifyingContract</code> as the fields of the <code>EIP712Domain</code> data type we can generate the type hash as follows:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wLbKi" id="tab-4vyxUK-" checked="checked"><label for="tab-4vyxUK-">Verbose.sol</label><input type="radio" name="group-wLbKi" id="tab-SCKlmIl"><label for="tab-SCKlmIl">Inline.sol</label><input type="radio" name="group-wLbKi" id="tab-08jd2V5"><label for="tab-08jd2V5">Hash.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;EIP712Domain(&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;string name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;string version&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;uint256 chainId&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;address verifyingContract&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;EIP712Domain(&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;string name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;string version&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;uint256 chainId&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;address verifyingContract&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&#39;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> EIP712_DOMAIN_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>`,9),o=[l];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};