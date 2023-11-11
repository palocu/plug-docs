import{_ as e,o as n,c as s,Q as a}from"./chunks/framework.6d94f49f.js";const m=JSON.parse('{"title":"Single Lane Nonces","description":"A single-lane nonce is used to ensure that a reference is only seen once.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Single Lane Nonces"}],["meta",{"name":"description","content":"A single-lane nonce is used to ensure that a reference is only seen once."}],["meta",{"property":"og:description","content":"A single-lane nonce is used to ensure that a reference is only seen once."}]]},"headers":[],"relativePath":"intents/execution-paths/single-lane.md","filePath":"intents/execution-paths/single-lane.md","lastUpdated":1699680977000}'),t={name:"intents/execution-paths/single-lane.md"},o=a(`<h1 id="single-lane-nonces" tabindex="-1">Single Lane Nonces <a class="header-anchor" href="#single-lane-nonces" aria-label="Permalink to &quot;Single Lane Nonces&quot;">​</a></h1><p>With native accounts and transactions a single-lane nonce is used to ensure that a transaction is only executed once.</p><h2 id="incremental-transaction-nonces" tabindex="-1">Incremental Transaction Nonces <a class="header-anchor" href="#incremental-transaction-nonces" aria-label="Permalink to &quot;Incremental Transaction Nonces&quot;">​</a></h2><p>With native accounts and transactions a single-lane nonce is used to ensure that a transaction is only executed once:</p><ul><li>Submit a transaction, your nonce is incremented by <code>1</code>.</li><li>Submit another transaction with a lower nonce, it&#39;s rejected.</li></ul><p>This is an low-overhead way to ensure that a transaction is never replayed.</p><h2 id="the-technical-benefit" tabindex="-1">The Technical Benefit <a class="header-anchor" href="#the-technical-benefit" aria-label="Permalink to &quot;The Technical Benefit&quot;">​</a></h2><p>Although very simple, a single nonce is extremely effective at ensuring uniqueness while preventing unintended reuse. By consuming an incrementally increasing nonce, a user can be sure that a transaction:</p><ul><li><strong>Is never executed out of order (replayed or skipped).</strong></li></ul><p>This simple rule result in a system that makes <a href="https://en.wikipedia.org/wiki/Double-spending" target="_blank" rel="noreferrer">double-spending</a> and <a href="https://en.wikipedia.org/wiki/Replay_attack" target="_blank" rel="noreferrer">replay attacks</a> impossible. How? Let&#39;s look at a simple example where we have $100 and we&#39;d like to send $50 to <code>Alice</code> and $50 to <code>Bob</code>:</p><ul><li>Send $50 to <code>Alice</code>, your nonce is incremented by <code>1</code>.</li><li>Send $50 to <code>Bob</code>, your nonce is incremented by <code>1</code>.</li></ul><p>Now, let&#39;s say that <code>Alice</code> is a bad actor and she tries to replay the transaction that sent her $50. What happens?</p><ul><li>Your nonce is already incremented by <code>1</code>, it&#39;s rejected.</li></ul><p>The transaction to <code>Alice</code> is rejected because the nonce is not the next incrementally increasing number. This is a very simple example, but it illustrates the power of a single-lane nonce.</p><p>In practice, the <code>Solidity</code> needed to power this is as simple as the concept:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-k_Jy_" id="tab-qCFcWCF" checked="checked"><label for="tab-qCFcWCF">Nonces.sol</label></div><div class="blocks"><div class="language-solidity vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/// </span><span style="color:#F97583;">@dev</span><span style="color:#6A737D;"> Single lane nonce implementation.</span></span>
<span class="line highlighted"><span style="color:#F97583;">mapping</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> sender </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> nonce) </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> senderToNonce;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">execute</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> $</span><span style="color:#FFAB70;">nonce</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">bytes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> $</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">external</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">require</span><span style="color:#E1E4E8;">($nonce </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">senderToNonce[</span><span style="color:#79B8FF;">msg.sender</span><span style="color:#E1E4E8;">], </span><span style="color:#9ECBFF;">&quot;Invalid nonce.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// Your replay-protected logic here.</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">/// </span><span style="color:#D73A49;">@dev</span><span style="color:#6A737D;"> Single lane nonce implementation.</span></span>
<span class="line highlighted"><span style="color:#D73A49;">mapping</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> sender </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> nonce) </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> senderToNonce;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">execute</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> $</span><span style="color:#E36209;">nonce</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">bytes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> $</span><span style="color:#E36209;">message</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">external</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">require</span><span style="color:#24292E;">($nonce </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">senderToNonce[</span><span style="color:#005CC5;">msg.sender</span><span style="color:#24292E;">], </span><span style="color:#032F62;">&quot;Invalid nonce.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// Your replay-protected logic here.</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Just two lines of code and you have a system that ensures that a transaction is never replayed or skipped. This is the core of the <code>Plug</code> permissioning system and is extended to provide a powerful and flexible permissioning system.</p></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The detail of validators and the underlying blockchain is not important to understand the benefit of a single-lane nonce. The only thing that matters is that the nonce is incremented by <code>1</code> for every transaction.</p></div><h2 id="the-experience-benefit" tabindex="-1">The Experience Benefit <a class="header-anchor" href="#the-experience-benefit" aria-label="Permalink to &quot;The Experience Benefit&quot;">​</a></h2><p>Before the advent of blockchain technology, double spending was a significant challenge in digital transactions. Traditional systems like banks, PayPal, or credit cards relied heavily on centralized authorities to prevent double spending. These systems require users to trust a third party to validate transactions and ensure that the same money isn&#39;t spent twice.</p><p>While single-lane nonces have proven effective in combating double spending in decentralized systems, traditional national currencies and banking systems have historically been vulnerable to various forms of this problem. In the context of national economies, double spending often manifests not as an individual attempting to spend the same dollar bill twice, but more broadly as systemic issues that have a profound economic impact.</p><p>The fractional reserve banking system, used globally, allows banks to lend more money than they actually have in reserve. In a way, this can be viewed as a form of institutionalized double spending. While this system is regulated and generally stable, it can lead to a cascade of problems if trust in the banking sector erodes, such as during the financial crisis of 2007-2008.</p><p>National governments themselves can engage in a form of double spending by printing more money than is backed by their reserves or economic output, risking hyperinflation. Countries like Zimbabwe and Venezuela have experienced the dire economic consequences of such policies.</p><p>In both the banking sector and governmental monetary policy, the risk of double spending and the broader systemic risks stem from centralized control. The lack of a foolproof, trustless system like blockchain&#39;s single-lane nonces means that citizens must rely on these centralized institutions to act responsibly, a trust that has been broken numerous times throughout history.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The risk of double spending in traditional financial systems reveals their central points of failure and highlights the need for more secure, decentralized alternatives. It underscores the significance of innovations like single-lane nonces in creating a more robust financial infrastructure.</p></div><p>In digital currencies without a central authority, the risk of double spending increases significantly. If there were no mechanisms like a single-lane nonce, a malicious actor could attempt to spend the same digital coin in more than one transaction. This would severely undermine the integrity and trust in the system.</p><p>The use of single-lane nonces in blockchain architectures directly tackles this problem. It not only prevents a transaction from being processed more than once but also thwarts any attempt to double spend. This is because each transaction is uniquely identified and ordered through its nonce, rendering previous transactions obsolete for replay purposes allowing individuals to transact with confidence.</p>`,26),l=[o];function i(r,c,p,d,h,u){return n(),s("div",null,l)}const g=e(t,[["render",i]]);export{m as __pageData,g as default};
