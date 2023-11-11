import{_ as e,o as a,c as s,Q as n}from"./chunks/framework.6d94f49f.js";const m=JSON.parse('{"title":"Why Plug","description":"A brief preamble on why Plug was built.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Why Plug"}],["meta",{"name":"description","content":"A brief preamble on why Plug was built."}],["meta",{"property":"og:description","content":"A brief preamble on why Plug was built."}]]},"headers":[],"relativePath":"introduction/why-plug.md","filePath":"introduction/why-plug.md","lastUpdated":1699736593000}'),t={name:"introduction/why-plug.md"},o=n(`<h1 id="why-plug" tabindex="-1">Why Plug <a class="header-anchor" href="#why-plug" aria-label="Permalink to &quot;Why Plug&quot;">​</a></h1><p>The crypto industry has been plagued by the inefficient and unfortunate realities of native EVM transactions. In just the last few months there has been a significant rise in alternative transaction settle mechanisms primarily focused around <a href="https://eips.ethereum.org/EIPS/eip-4337" target="_blank" rel="noreferrer">smart accounts</a> and alternate mempools. Yet, while there is more noise in the market, all existing solutions lack in either <strong>composability</strong>, <strong>extinsibility</strong>, or <strong>modernity</strong>.</p><p>Data trends reveal that wasted gas on failed transactions and inefficiencies is equivalent to millions of dollars lost every year. Plug aims to address these crucial pain points by reimagining how EVM transactions can be more logical, efficient, and user-centric.</p><h2 id="the-problems" tabindex="-1">The Problems <a class="header-anchor" href="#the-problems" aria-label="Permalink to &quot;The Problems&quot;">​</a></h2><p>Even after a decade there is still no battle-tested plug-and-play option. Instead, developers and blockchain users have been left to deal with:</p><h3 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h3><p>Traditionally, permissions are handled on a contract-by-contract basis. This leads to a fragmented and inconsistent security model where each smart contract has its unique authorization mechanism, making it cumbersome to manage permissions across multiple contracts.</p><h3 id="ordering" tabindex="-1">Ordering <a class="header-anchor" href="#ordering" aria-label="Permalink to &quot;Ordering&quot;">​</a></h3><p>In the classic EVM, transactions are processed sequentially. This design imposes severe limitations on transaction throughput and creates bottlenecks, particularly during network congestion.</p><h3 id="anticipatory-costs" tabindex="-1">Anticipatory Costs <a class="header-anchor" href="#anticipatory-costs" aria-label="Permalink to &quot;Anticipatory Costs&quot;">​</a></h3><p>Users are required to pay transaction costs upfront. This system is inefficient because costs are incurred before knowing whether a transaction will yield any value, effectively making every transaction a gamble.</p><h3 id="scalability" tabindex="-1">Scalability <a class="header-anchor" href="#scalability" aria-label="Permalink to &quot;Scalability&quot;">​</a></h3><p>Managing permissions often involves declaring them for each reference or interaction, leading to a bloated and inefficient system. This makes it challenging to scale the protocol or system as new features and interactions are added.</p><h3 id="unbounded-transactions" tabindex="-1">Unbounded Transactions <a class="header-anchor" href="#unbounded-transactions" aria-label="Permalink to &quot;Unbounded Transactions&quot;">​</a></h3><p>Once a transaction is submitted, there is no built-in mechanism to protect against changes in contract state or network conditions that might affect the transaction before it gets confirmed. This leaves users vulnerable to smart contract vulnerabilities, front-running, and other forms of transaction manipulation.</p><p>These issues aren&#39;t just theoretical—they manifest as real bottlenecks that hamper adoption and user experience. The need for a solution has never been more pressing.</p><p>As the developer of protocols aimed at typical consumers the requirements to interact with the blockchain have been a constant hurdle. If users cannot access what you&#39;ve made; you are missing out on the vast majority of users regardless the potential.</p><p>I wanted the ability to lower the barrier of entry without negatively impacting all the existing blockchains benefits such as <em>censorship resistance</em> and <em>settlement reliability</em>, but all existing options required a significant level of integration, customized architecture and one-off solutions that couldn&#39;t be reused project to project.</p><p>A maximum of 5 minutes and I wanted to be up and running with a new idea. So, I created <strong>Plug</strong>: an extensible framework that provides plug-and-play utilities for your onchain <code>Solidity</code> protocol and <code>Typescript</code> based app. Inspired by all the tried solutions before, <code>Plug</code> packages as many benefits as possible together while leaving compromises, choices and opinion up to the implementing consumers.</p><h2 id="traditional-blockchain-transactions-a-refresher" tabindex="-1">Traditional Blockchain Transactions: A Refresher <a class="header-anchor" href="#traditional-blockchain-transactions-a-refresher" aria-label="Permalink to &quot;Traditional Blockchain Transactions: A Refresher&quot;">​</a></h2><p>In the orthodox blockchain transaction model, a user&#39;s <code>Account</code> is used to sign a <code>Transaction</code>. <a href="/intents/imperative-transactions.html">This <code>Transaction</code> specifies several parameters like the contract address, the method to invoke, and the amount of gas to allocate.</a></p><p>The <code>Transaction</code> is then broadcast to the network, where it waits in a mempool until miners include it in a new block.</p><p>Critically, <code>Transactions</code> not do settle based upon the ordering of the value created by the execution (<em>even though they theoretically could in a vacuum</em>), but by the magnitude of value paid to miners by the sender of the transaction.</p><p>The user has minimal control over this process beyond setting the gas price. Once the <code>Transaction</code> is broadcast, it is subject to the whims of network congestion, miner priorities, and other unpredictable factors. This results in significant amounts of wasted gas (<em>gas bad</em>) as well as a swarm of general market inefficencies.</p><h2 id="the-declarative-difference" tabindex="-1">The Declarative Difference <a class="header-anchor" href="#the-declarative-difference" aria-label="Permalink to &quot;The Declarative Difference&quot;">​</a></h2><p>Plug introduces a paradigm shift. Instead of being a passive participant in the transaction process, the user gains the power to set conditions for transaction execution. This transforms the transaction model from being immediate and rigid to being flexible and condition-based.</p><p>If a transaction doesn&#39;t meet the predetermined conditions, it simply won&#39;t execute. This eliminates the risks associated with upfront costs, as you only pay for transactions that provide value. Additionally, it allows for more strategic planning around gas usage, thereby optimizing cost-efficiency.</p><p>This means that instead of crafting a transaction solely based on the contract to call and the gas to provide, an individual has the ability to explicitly declare the <a href="/intents/declarative-messages.html">conditions that must be met to allow execution</a>.</p><h2 id="developer-experience" tabindex="-1">Developer Experience <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Developer Experience&quot;">​</a></h2><p>Plug was developed with one thing in mind: <strong>time to launch.</strong> Too much time is wasted in the crypto development industry on reinventing the wheel and solving complex problems that have not only been solved, but had their answers shared far and wide.</p><p>To accomplish this, <code>Plug</code> is designed to streamline the process of integrating <a href="/intents/declarative-messages.html">Declarative Transactions</a> into your protocol with a <code>types first</code> approach. Unlike what you may expect, type generation and declaration for <code>Plug</code> starts with <code>Solidity</code> in the shape of <a href="https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct" target="_blank" rel="noreferrer">EIP-712 Type Declarations</a>.</p><p>By default, <code>Plug</code> ships with the base types that are needed to power declarative transactions however if you are seeking to build a more complex protocol, you can easily extend the types to meet your needs.</p><p>With your EIP-712 types defined, <code>Plug</code> will not only unlock the ability to generate the corresponding <code>TypeScript</code> logic, but the <code>Solidity</code> smart contract as well. This means that as soon as you declare the types used onchain you can immediately start using them in your application and broader protocol stack.</p><p>Plus, with a <code>types first</code> approach your types are always kept in sync ensuring that you never have to worry about type mismatches or inconsistencies. What would have taken tens to hundreds of hours before can be completed in just a couple of minutes.</p><p>To make integration as seamless as possible it was a constant priority not to be prescriptive. At every step of development I am diligent not to introduce opinion that one may disagree with or <em>simply not need</em>.</p><h2 id="composability" tabindex="-1">Composability <a class="header-anchor" href="#composability" aria-label="Permalink to &quot;Composability&quot;">​</a></h2><p>One of Plug&#39;s main advantages is its focus on composability. In traditional blockchain platforms, the components often exist as siloed entities with limited interoperability. Plug shatters these silos by ensuring that its elements can work synergistically.</p><p>The inherent composability allows developers to build complex decentralized applications that are more than just the sum of their parts. The use of conditional transactions particularly enriches smart contract interactions, making it possible to create intricate, multi-step decentralized workflows that were previously challenging or expensive to implement.</p><h2 id="extensibility" tabindex="-1">Extensibility <a class="header-anchor" href="#extensibility" aria-label="Permalink to &quot;Extensibility&quot;">​</a></h2><p>Plug&#39;s architecture is designed for extensibility. Unlike other solutions that offer a one-size-fits-all model, Plug is modular. This design enables you to tailor the framework to meet the unique demands of your specific project.</p><p>The protocol&#39;s extensible nature means it can evolve. As blockchain technology continues to advance, new modules can be added to Plug without requiring a complete overhaul of the existing infrastructure.</p><h2 id="modernity" tabindex="-1">Modernity <a class="header-anchor" href="#modernity" aria-label="Permalink to &quot;Modernity&quot;">​</a></h2><p>In a field where staying up-to-date is not just an advantage but a necessity, Plug excels by incorporating the latest advancements in blockchain technology and tolling. Plug offers a cutting-edge alternative to traditional transaction models by enabling conditional transactions built on top of <code>abitype</code>, <code>viem</code>, and <code>hardhat</code>.</p><p>There is no dealing with legacy code or outdated technology. Plug is built for the future while enriching as much of the past as possible.</p><h2 id="minimal-integration-architecture" tabindex="-1">Minimal Integration Architecture <a class="header-anchor" href="#minimal-integration-architecture" aria-label="Permalink to &quot;Minimal Integration Architecture&quot;">​</a></h2><p>Plug delivers an unparalleled experience when it comes to implementing support for intents in your protocol for one simple reason:</p><ol><li>Integration has been designed to happen at the lowest level possible.</li></ol><p>Contrary to the typical past approach that led smart contract developers to implement signatures as part of their key mechanism, transaction verification and execution is pushed to the very edge of the protocol. This means, that instead of keeping an entirely separate piece of logic and conditions held in your mind during development of the core mechanisms, you achieve genuine <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" target="_blank" rel="noreferrer">seperation of concerns</a> and can focus on the core of your protocol.</p><p>Instead of integrating an extensive set of functionality in the underlying pieces of your protocol, simply inherit the Plug framework and you&#39;re done. <strong>It&#39;s really that simple.</strong> For example, <a href="https://uniswap.org/" target="_blank" rel="noreferrer">Uniswap</a>, the leading decentralized exchange of Ethereum, had to integrate a swap <code>deadline</code> into the actual <code>swap</code> function of the protocol:</p><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">swapTokensForExactTokens</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">amountOut</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">amountInMax</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">deadline</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">swapTokensForExactTokens</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint</span><span style="color:#24292E;"> </span><span style="color:#E36209;">amountOut</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint</span><span style="color:#24292E;"> </span><span style="color:#E36209;">amountInMax</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">address</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> </span><span style="color:#E36209;">path</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> </span><span style="color:#E36209;">to</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint</span><span style="color:#24292E;"> </span><span style="color:#E36209;">deadline</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>With Plug, a decentralized exchange (DEX) like Uniswap, could use the <code>ThresholdEnforcer</code> instead of including <code>blockNumber</code> deadlines at the application/protocol layer. Additionally <code>Users</code> could set before, after and between conditionals, instead of just before, without changing the core smart contract function logic.</p><p>Why is this important, you might ask?</p><p>First, we have to ask the question &quot;Why does Uniswap have to enforce transaction-level access controls at all?&quot;</p><p>It&#39;s not ideal that <code>UniswapV2</code> is required to include <code>blockNumber deadlines</code>in an<code>AutomatedMarketMaker</code> primitive. The concerns have not been separated. Not only did Uniswap developers have to design around this nuance, but all mechanisms consuming Uniswap also have to not only be aware of, but account for this nuance.</p><p>The severity of this issue increases as you survey more modern protocols such as <a href="https://github.com/ProjectOpenSea/seaport" target="_blank" rel="noreferrer">Seaport</a>, which followed a very similar route:</p><div class="language-solidity vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">validateTime</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">OrderParameters</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">memory</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">orderParameters</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">shortOrderDuration</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">distantOrderExpiration</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">external</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">returns</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">ErrorsAndWarnings</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">memory</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">errorsAndWarnings</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">validateTime</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">OrderParameters</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">memory</span><span style="color:#24292E;"> </span><span style="color:#E36209;">orderParameters</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> </span><span style="color:#E36209;">shortOrderDuration</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> </span><span style="color:#E36209;">distantOrderExpiration</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">external</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">view</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">returns</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">ErrorsAndWarnings</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">memory</span><span style="color:#24292E;"> </span><span style="color:#E36209;">errorsAndWarnings</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Seaport was developed by a set of the best developers in the entire industry and still they were not able to build on top of a framework that enabled genuine separation of concerns.</p><p><strong>Everyone is relying on very similar logic while all simultaneously having to implement it themselves. This is a huge waste of time and resources.</strong></p>`,58),i=[o];function r(l,c,p,d,h,u){return a(),s("div",null,i)}const g=e(t,[["render",r]]);export{m as __pageData,g as default};
