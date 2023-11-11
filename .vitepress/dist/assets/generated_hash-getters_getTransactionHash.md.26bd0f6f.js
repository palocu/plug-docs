import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.6d94f49f.js";const u=JSON.parse('{"title":"getTransactionHash","description":"Encode a Transaction into a hash and verify the decoded data to verify type compliance.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getTransactionHash"}],["meta",{"name":"description","content":"Encode a Transaction into a hash and verify the decoded data to verify type compliance."}],["meta",{"property":"og:description","content":"Encode a Transaction into a hash and verify the decoded data to verify type compliance."}]],"notes":[[{"author":"Auto generated by @nftchance/plug-types/cli"}]]},"headers":[],"relativePath":"generated/hash-getters/getTransactionHash.md","filePath":"generated/hash-getters/getTransactionHash.md","lastUpdated":1699736593000}'),t={name:"generated/hash-getters/getTransactionHash.md"},o=e(`<h1 id="gettransactionhash" tabindex="-1">getTransactionHash <a class="header-anchor" href="#gettransactionhash" aria-label="Permalink to &quot;getTransactionHash&quot;">​</a></h1><p>Encode a <a href="/generated/base-types/Transaction.html">Transaction</a> into a hash and verify the decoded <a href="/generated/base-types/Transaction.html">Transaction</a> data from a hash to verify type compliance.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><ul><li><code>$input</code> : <a href="/generated/base-types/Transaction.html">Transaction</a> : The <code>Transaction</code> data to encode.</li></ul><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><ul><li><code>$hash</code> : <code>bytes32</code> : The packet hash of the encoded <a href="/generated/base-types/Transaction.html">Transaction</a> data.</li></ul><h2 id="onchain-implementation" tabindex="-1">Onchain Implementation <a class="header-anchor" href="#onchain-implementation" aria-label="Permalink to &quot;Onchain Implementation&quot;">​</a></h2><p>With <code>getTransactionHash</code> you can call the function as a <code>read</code> and get the encoded data back as a hash.</p><p>This is helpful in times when you need to build a message hash without tracking down all the types as well as when you need to verify a signed message hash containing a <code>Transaction</code> data type.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-bhX69" id="tab-qoUCIKR" checked="checked"><label for="tab-qoUCIKR">Types.sol:getTransactionHash</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getTransactionHash</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">Transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">memory</span><span style="color:#E1E4E8;"> $</span><span style="color:#FFAB70;">input</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">pure</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">virtual</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">returns</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">bytes32</span><span style="color:#E1E4E8;"> $</span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	$</span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">encode</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		TRANSACTION_TYPEHASH,</span></span>
<span class="line"><span style="color:#E1E4E8;">		$input.to,</span></span>
<span class="line"><span style="color:#E1E4E8;">		$input.gasLimit,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">keccak256</span><span style="color:#E1E4E8;">($input.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">	));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getTransactionHash</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">Transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">memory</span><span style="color:#24292E;"> $</span><span style="color:#E36209;">input</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">pure</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">virtual</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">returns</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">bytes32</span><span style="color:#24292E;"> $</span><span style="color:#005CC5;">hash</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">	$</span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">abi</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">encode</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		TRANSACTION_TYPEHASH,</span></span>
<span class="line"><span style="color:#24292E;">		$input.to,</span></span>
<span class="line"><span style="color:#24292E;">		$input.gasLimit,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">keccak256</span><span style="color:#24292E;">($input.data)</span></span>
<span class="line"><span style="color:#24292E;">	));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div></div>`,10),l=[o];function p(c,r,i,d,y,h){return s(),n("div",null,l)}const m=a(t,[["render",p]]);export{u as __pageData,m as default};
