import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6d94f49f.js";const h=JSON.parse('{"title":"Base Types","description":"","frontmatter":{},"headers":[],"relativePath":"decoders/base-types.md","filePath":"decoders/base-types.md","lastUpdated":1699680977000}'),o={name:"decoders/base-types.md"},l=e(`<h1 id="base-types" tabindex="-1">Base Types <a class="header-anchor" href="#base-types" aria-label="Permalink to &quot;Base Types&quot;">​</a></h1><p><code>Plug</code> is architected on a handful of <a href="/decoders/base-types.html">Base EIP-712 Types</a> that are used to build the <a href="/core/framework.html">Core Plug</a> and <a href="/core/caveat-enforcer.html">Caveats</a>. Alone these types are not very useful, but together they form the foundation of the <code>Plug</code> framework.</p><h2 id="type-hashes" tabindex="-1">Type Hashes <a class="header-anchor" href="#type-hashes" aria-label="Permalink to &quot;Type Hashes&quot;">​</a></h2><p>Type hashes are a cornerstone in the EIP-712 standard and by extension, the Plug framework. They function as unique identifiers for each type of data you&#39;re working with. These are not to be confused with instance hashes, which are identifiers for specific instances of data. Type hashes essentially serve as templates or blueprints.</p><p>Imagine building a house without a blueprint. You could try to explain what you want, but without a standardized plan, you&#39;re bound to run into inconsistencies, misunderstandings, or mistakes. Type hashes act like these blueprints, giving a standardized representation that all parties can understand and agree upon.</p><p>For instance, when someone signs a permission, it&#39;s not just the data that is signed, but also its type hash. This ensures that the <code>Signer</code>, the <code>Executor</code>, and the smart contract all agree on the &quot;shape&quot; or structure of the data.</p><h3 id="how-to-calculate-a-type-hash" tabindex="-1">How to Calculate a Type Hash <a class="header-anchor" href="#how-to-calculate-a-type-hash" aria-label="Permalink to &quot;How to Calculate a Type Hash&quot;">​</a></h3><p>The type hash is calculated by taking the <code>keccak256</code> hash of the type concatenated with the type hash of each of its children. For example, the type hash of the <code>EIP712Domain</code> type can be calculated like:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cLxuD" id="tab-3B5pTIF" checked="checked"><label for="tab-3B5pTIF">viem.ts</label><input type="radio" name="group-cLxuD" id="tab-makSpjB"><label for="tab-makSpjB">ethers.ts</label><input type="radio" name="group-cLxuD" id="tab-ehjoGQ7"><label for="tab-ehjoGQ7">Verbose.sol</label><input type="radio" name="group-cLxuD" id="tab-nJAaV7P"><label for="tab-nJAaV7P">Inline.sol</label><input type="radio" name="group-cLxuD" id="tab-GgtrkbD"><label for="tab-GgtrkbD">Hash.sol</label></div><div class="blocks"><div class="language-typescript vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { keccak256 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;viem&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TYPE_HASH</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">toHex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { keccak256 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;viem&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TYPE_HASH</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">toHex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&quot;</span></span>
<span class="line"><span style="color:#24292E;">  )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ethers, TypedDataEncoder } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ethers&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./config&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encoder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TypedDataEncoder</span><span style="color:#E1E4E8;">(config.types);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TYPE_HASH</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ethers.</span><span style="color:#B392F0;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  ethers.</span><span style="color:#B392F0;">toUtf8Bytes</span><span style="color:#E1E4E8;">(encoder.</span><span style="color:#B392F0;">encodeType</span><span style="color:#E1E4E8;">(typeName))</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ethers, TypedDataEncoder } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ethers&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./config&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encoder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TypedDataEncoder</span><span style="color:#24292E;">(config.types);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TYPE_HASH</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ethers.</span><span style="color:#6F42C1;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  ethers.</span><span style="color:#6F42C1;">toUtf8Bytes</span><span style="color:#24292E;">(encoder.</span><span style="color:#6F42C1;">encodeType</span><span style="color:#24292E;">(typeName))</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> TYPE_HASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;EIP712Domain(&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;string name,&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;string version,&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;uint256 chainId,&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;address verifyingContract&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> TYPE_HASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;EIP712Domain(&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;string name,&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;string version,&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;uint256 chainId,&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;address verifyingContract&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> TYPE_HASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> TYPE_HASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)&#39;</span></span>
<span class="line"><span style="color:#24292E;">&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">constant</span><span style="color:#E1E4E8;"> TYPE_HASH </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x0aeb9481a395eb23cf4f23582fc3486e5f39ec614b0fa703eff30fe32245d399</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">constant</span><span style="color:#24292E;"> TYPE_HASH </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x0aeb9481a395eb23cf4f23582fc3486e5f39ec614b0fa703eff30fe32245d399</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="type-categories" tabindex="-1">Type Categories <a class="header-anchor" href="#type-categories" aria-label="Permalink to &quot;Type Categories&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are using a modern interface library for Ethereum such as <code>viem</code>, you will not need to worry about the categories. The library will handle the decoding and remove unused types. In other libraries though, you may need to manually remove unused types. For example, if you are using <code>ethers</code> or <code>web3.js</code> you will need to manually remove unused types.</p></div><h3 id="domain-types" tabindex="-1">Domain Types <a class="header-anchor" href="#domain-types" aria-label="Permalink to &quot;Domain Types&quot;">​</a></h3><p>As covered in the <a href="/decoders/eip-712.html">EIP-712</a> section, typed signatures include the <code>domain hash</code> so that a <code>Signer</code> can always be sure the data being signed is not malicious or meant for a different contract.</p><ul><li><a href="/generated/base-types/EIP712Domain.html">EIP712Domain</a></li></ul><p>By default, most libraries include the <code>EIP712Domain</code> type in the signature. This is because the <code>EIP712Domain</code> type is used to define every signature and things would not be secure without it. While the types of every protocol vary, they all share the same <code>EIP712Domain</code> type.</p><h2 id="permission-types" tabindex="-1">Permission Types <a class="header-anchor" href="#permission-types" aria-label="Permalink to &quot;Permission Types&quot;">​</a></h2><p>Now stepping into the pieces introduced by the <code>Plug</code> framework, the <code>Permission Types</code> are used to define the <a href="/generated/base-types/Permission.html">Permission</a> that is being given.</p><p>When creating new permissions you will utilize:</p><ul><li><a href="/generated/base-types/Caveat.html">Caveat</a></li><li><a href="/generated/base-types/Permission.html">Permission</a></li></ul><p>When distributing, verifying or executing permissions you will utilize:</p><ul><li><a href="/generated/base-types/SignedPermission.html">SignedPermission</a></li></ul><p>No matter the complexity of the permission, the <code>Permission Types</code> are always the same. This is because the <code>Permission Types</code> are used to define the <code>Permission</code> that is being given, not the logic of the <code>Permission</code>.</p><h2 id="intent-types" tabindex="-1">Intent Types <a class="header-anchor" href="#intent-types" aria-label="Permalink to &quot;Intent Types&quot;">​</a></h2><p>The <code>Intent Types</code> are used to define the <a href="/intents/introduction.html">Intent</a> that is executed.</p><p>When creating new intents you will utilize:</p><ul><li><a href="/generated/base-types/ReplayProtection.html">Replay Protection</a></li><li><a href="/generated/base-types/Transaction.html">Transaction</a></li><li><a href="/generated/base-types/Intent.html">Intent</a></li></ul><p>When distributing new intents you will utilize:</p><ul><li><a href="/generated/base-types/SignedIntents.html">SignedIntents</a></li></ul>`,28),p=[l];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const b=s(o,[["render",t]]);export{h as __pageData,b as default};
