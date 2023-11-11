import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6d94f49f.js";const u=JSON.parse('{"title":"Permission","description":"A Permission data type provides EIP-712 compatability for encoding and decoding.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Permission"}],["meta",{"name":"description","content":"A Permission data type provides EIP-712 compatability for encoding and decoding."}],["meta",{"property":"og:description","content":"A Permission data type provides EIP-712 compatability for encoding and decoding."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/base-types/Permission.md","filePath":"generated/base-types/Permission.md","lastUpdated":1699736593000}'),p={name:"generated/base-types/Permission.md"},l=e(`<h1 id="permission" tabindex="-1">Permission <a class="header-anchor" href="#permission" aria-label="Permalink to &quot;Permission&quot;">​</a></h1><p>A <a href="/generated/base-types/Permission.html">Permission</a> data type provides EIP-712 compatability for encoding and decoding the data needed for an <code>Intent</code> to be securely distributed and executed.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Inside the declaration of a <code>Permission</code> data type there are nested <a href="/generated/base-types/Caveat.html">Caveat</a> data types that need to be built independently.</p></div><h2 id="the-data-type" tabindex="-1">The Data Type <a class="header-anchor" href="#the-data-type" aria-label="Permalink to &quot;The Data Type&quot;">​</a></h2><p>To interact with the data type onchain will you need both the <code>Typescript</code> and <code>EIP-712</code> representations of the <code>Permission</code> data type:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0SO_g" id="tab-kUjjcTE" checked="checked"><label for="tab-kUjjcTE">Typescript/Javascript</label><input type="radio" name="group-0SO_g" id="tab-txinWXh"><label for="tab-txinWXh">EIP-712</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">delegate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">authority</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">caveats</span><span style="color:#E1E4E8;">: Array</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Caveat</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">salt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0x\${string}&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delegate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0x\${string}&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">authority</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0x\${string}&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">caveats</span><span style="color:#24292E;">: Array</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Caveat</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">salt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0x\${string}&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;delegate&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;authority&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;bytes32&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;caveats&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Caveat[]&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">	{ </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;salt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;bytes32&#39;</span><span style="color:#E1E4E8;"> } </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;delegate&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;authority&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;bytes32&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;caveats&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Caveat[]&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">	{ </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;salt&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;bytes32&#39;</span><span style="color:#24292E;"> } </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The <code>Typescript</code> representation is used to build and work with the object in your dApp and API while the <code>EIP-712</code> representation is used to encode and decode the data type onchain.</p></div><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>delegate</code>, <code>authority</code>, <code>caveats</code> and <code>salt</code> as the fields of the <code>Permission</code> data type we can generate the type hash as follows:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-3jjdb" id="tab-o5rc3hq" checked="checked"><label for="tab-o5rc3hq">Verbose.sol</label><input type="radio" name="group-3jjdb" id="tab-BBOx5a3"><label for="tab-BBOx5a3">Inline.sol</label><input type="radio" name="group-3jjdb" id="tab-fBqh1Jh"><label for="tab-fBqh1Jh">Hash.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> PERMISSION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;Permission(&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;address delegate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;bytes32 authority&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;Caveat[] caveats&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;bytes32 salt&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> PERMISSION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;Permission(&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;address delegate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;bytes32 authority&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;Caveat[] caveats&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;bytes32 salt&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> PERMISSION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;Permission(address delegate,bytes32 authority,Caveat[] caveats,bytes32 salt)Caveat(address enforcer,bytes terms)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> PERMISSION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;Permission(address delegate,bytes32 authority,Caveat[] caveats,bytes32 salt)Caveat(address enforcer,bytes terms)&#39;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> PERMISSION_TYPEHASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x09686912aee7d07d4c6628e990246146314786450fe58a7bf00a0afe40092d12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> PERMISSION_TYPEHASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x09686912aee7d07d4c6628e990246146314786450fe58a7bf00a0afe40092d12</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div>`,10),o=[l];function t(c,r,i,y,E,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
