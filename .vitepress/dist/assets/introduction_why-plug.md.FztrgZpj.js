import{_ as e,o as t,c as a,R as o}from"./chunks/framework.OBNbGUgv.js";const g=JSON.parse('{"title":"Why Plug","description":"A brief preamble on why Plug was built.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Why Plug"}],["meta",{"name":"description","content":"A brief preamble on why Plug was built."}],["meta",{"property":"og:description","content":"A brief preamble on why Plug was built."}]]},"headers":[],"relativePath":"introduction/why-plug.md","filePath":"introduction/why-plug.md","lastUpdated":1707244544000}'),i={name:"introduction/why-plug.md"},n=o('<h1 id="why-plug" tabindex="-1">Why Plug <a class="header-anchor" href="#why-plug" aria-label="Permalink to &quot;Why Plug&quot;">​</a></h1><p>The crypto industry has been plagued by the inefficient and unfortunate realities of native EVM transactions for just under a decade. In just the last few months there has been a significant rise in alternative transaction settle mechanisms primarily focused around <a href="https://eips.ethereum.org/EIPS/eip-4337" target="_blank" rel="noreferrer">smart accounts</a> and alternate mempools. Yet, while there is more noise in the market, all existing solutions lack in either <strong>composability</strong>, <strong>extinsibility</strong>, or <strong>modernity</strong>.</p><p>Data trends reveal that wasted gas on failed transactions and inefficiencies is equivalent to millions of dollars lost every year and value lost to inefficient settlement is even larger. Plug aims to address these crucial pain points by reimagining how EVM transactions can be more logical, efficient, and user-centric.</p><h2 id="the-problems" tabindex="-1">The Problems <a class="header-anchor" href="#the-problems" aria-label="Permalink to &quot;The Problems&quot;">​</a></h2><p>Even after a decade there is still no battle-tested plug-and-play option. Instead, developers and blockchain users have been left to deal with:</p><h3 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h3><p>Traditionally, pins are handled on a contract-by-contract basis. This leads to a fragmented and inconsistent security model where each smart contract has its unique authorization mechanism, making it cumbersome to manage conditions across multiple contracts.</p><h3 id="ordering" tabindex="-1">Ordering <a class="header-anchor" href="#ordering" aria-label="Permalink to &quot;Ordering&quot;">​</a></h3><p>In the classical EVM approach, transactions are processed sequentially. This design imposes severe limitations on transaction throughput and creates bottlenecks, particularly during network congestion.</p><h3 id="anticipatory-costs" tabindex="-1">Anticipatory Costs <a class="header-anchor" href="#anticipatory-costs" aria-label="Permalink to &quot;Anticipatory Costs&quot;">​</a></h3><p>Users are required to pay transaction costs upfront. This system is inefficient because costs are incurred before knowing whether a transaction will yield any value, effectively making every transaction a ~gamble.</p><h3 id="scalability" tabindex="-1">Scalability <a class="header-anchor" href="#scalability" aria-label="Permalink to &quot;Scalability&quot;">​</a></h3><p>Managing conditions often involves declaring them for each reference or interaction, leading to a bloated and inefficient system. This makes it challenging to scale the protocol or system as new features and interactions are added.</p><h3 id="unbounded-transactions" tabindex="-1">Unbounded Transactions <a class="header-anchor" href="#unbounded-transactions" aria-label="Permalink to &quot;Unbounded Transactions&quot;">​</a></h3><p>Once a transaction is submitted, there is no built-in mechanism to protect against changes in contract state or network conditions that might affect the transaction before it gets confirmed. This leaves users vulnerable to smart contract vulnerabilities, front-running, and other forms of transaction manipulation.</p><p>These issues aren&#39;t just theoretical. They manifest as real bottlenecks that hamper adoption and user experience. The need for a solution has never been more pressing.</p><p>As the developer of protocols aimed at typical consumers the requirements to interact with the blockchain have been a constant hurdle. If users cannot access what you&#39;ve made; you are missing out on the vast majority of users regardless the potential.</p><p>I wanted the ability to lower the barrier of entry without negatively impacting all the existing blockchains benefits such as <em>censorship resistance</em> and <em>settlement reliability</em>, but all existing options required a significant level of integration, customized architecture and one-off solutions that couldn&#39;t be reused project to project.</p><p>With a maximum of 5 minutes and I wanted to be up and running with a new idea. So, I created <strong>Plug</strong>: an extensible framework that provides plug-and-play utilities for every protocol whether deployed in the past, present or future.</p><p>Inspired by all the tried solutions before, <code>Plug</code> packages as many benefits as possible together while leaving compromises, choices and opinion up to the consuming users.</p><h2 id="traditional-blockchain-transactions-a-refresher" tabindex="-1">Traditional Blockchain Transactions: A Refresher <a class="header-anchor" href="#traditional-blockchain-transactions-a-refresher" aria-label="Permalink to &quot;Traditional Blockchain Transactions: A Refresher&quot;">​</a></h2><p>In the orthodox blockchain transaction model, a user&#39;s <code>Account</code> is used to sign a <code>Transaction</code>. This <code>Transaction</code> specifies several parameters like <a href="/introduction/transactions.html#imperative-transactions">the contract address, the method to call, and the amount of gas to allocate.</a></p><p>The <code>Transaction</code> is then broadcast to the network, where it waits in a mempool until miners include it in a new block.</p><p>Critically, <code>Transactions</code> not do settle based upon the ordering of the value created by the execution (<em>even though they theoretically could in a vacuum</em>), but by the magnitude of value paid to miners by the sender of the transaction.</p><p>The user has minimal control over this process beyond setting the gas price. Once the <code>Transaction</code> is broadcast, it is subject to the whims of network congestion, miner priorities, and other unpredictable factors. This results in significant amounts of wasted gas (<em>gas bad</em>) as well as a swarm of general market inefficencies.</p><h2 id="the-declarative-difference" tabindex="-1">The Declarative Difference <a class="header-anchor" href="#the-declarative-difference" aria-label="Permalink to &quot;The Declarative Difference&quot;">​</a></h2><p>Plug introduces a paradigm shift. Instead of being a passive participant in the transaction process, the user gains the power to set conditions for transaction execution. This transforms the transaction model from being immediate and rigid to being flexible and condition-based.</p><p>If a transaction doesn&#39;t meet the predetermined conditions, it simply won&#39;t execute. This eliminates the risks associated with upfront costs, as you only pay for transactions that provide value. Additionally, it allows for more strategic planning around gas usage and unexpected outcomes, thereby optimizing the value to cost ratio.</p><p>This means that instead of crafting a transaction solely based on the contract to call and the gas to provide, an individual has the ability to explicitly declare the <a href="/introduction/transactions.html#declarative-transactions">conditions that must be met to allow execution</a>.</p><p>The concept of &quot;If This, Then That&quot; is straightforward but holds immense potential. It&#39;s the core logic that allows you to build complex conditional statements, which is especially powerful in smart contracts and blockchain technologies.</p><h2 id="an-onchain-protocol-that-brings-ifttt-statements" tabindex="-1">An Onchain Protocol that brings IFTTT Statements <a class="header-anchor" href="#an-onchain-protocol-that-brings-ifttt-statements" aria-label="Permalink to &quot;An Onchain Protocol that brings IFTTT Statements&quot;">​</a></h2><p>At its essence, &quot;If This, Then That&quot; is a conditional statement that enables automation. You set a trigger (<code>This</code>), and if that trigger occurs, a particular action (<code>That</code>) follows.</p><ul><li>If the trigger is met, then the action happens.</li><li>If condition <code>A</code> is true, then perform action <code>B</code>.</li></ul><p>This logic isn&#39;t just a fancy way of saying something. It&#39;s a powerful concept used <a href="https://en.wikipedia.org/wiki/Object-capability_model" target="_blank" rel="noreferrer">extensively in programming, data science</a>, and now increasingly in blockchain technology.</p><p>You might be thinking, &quot;Hey, this sounds a lot like <a href="https://zapier.com/" target="_blank" rel="noreferrer">Zapier</a>, <a href="https://apps.apple.com/us/app/shortcuts/id915249334" target="_blank" rel="noreferrer">Apple Shortcuts</a> and all those <a href="https://ifttt.com/" target="_blank" rel="noreferrer">IFTTT (If This, Then That) services</a> I use to automate my life!&quot; Well, you&#39;re right; the underlying logic is quite similar. Services like Zapier or IFTTT let you create &quot;Zaps&quot; or &quot;Applets&quot; that link different apps and services together based on triggers and actions.</p><h2 id="how-does-plug-use-ifttt" tabindex="-1">How does <code>Plug</code> use IFTTT? <a class="header-anchor" href="#how-does-plug-use-ifttt" aria-label="Permalink to &quot;How does `Plug` use IFTTT?&quot;">​</a></h2><p>In <code>Plug</code>, you&#39;re doing something similar but in a much more powerful and secure environment—the blockchain. Here, the &quot;<em>If This, Then That</em>&quot; logic enables you to create complex conditions and actions related to smart contracts. Instead of linking social media accounts or automating email notifications, you&#39;re setting rules for how digital assets and data can be accessed, moved, or transformed.</p><p>Imagine automating an entire financial system, a voting mechanism, or an ownership registry with the same ease you set a reminder to water your plants. That&#39;s the potential power of employing IFTTT logic in the blockchain via <code>Plug</code>.</p><p>By understanding the simple yet powerful logic of &quot;If This, Then That,&quot; you&#39;re not just becoming proficient in using <code>Plug</code>; you&#39;re understanding a foundational principle of modern technology.</p><p>To sum it up in the simplest way, <code>Plug</code> is like <a href="https://zapier.com" target="_blank" rel="noreferrer">Zapier</a>, but for EVM smart contracts.</p><h2 id="developer-experience" tabindex="-1">Developer Experience <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Developer Experience&quot;">​</a></h2><p>Plug was developed with one thing in mind: <strong>time to launch.</strong> Too much time is wasted in the crypto development industry on reinventing the wheel and solving complex problems that have not only been solved, but had their answers shared far and wide.</p><p>To accomplish this, <code>Plug</code> is designed to streamline the process of integrating <a href="/introduction/transactions.html#declarative-transactions">Declarative Transactions</a> into your protocol with a <code>types first</code> approach. Unlike what you may expect, type generation and declaration for <code>Plug</code> starts with <code>Solidity</code> in the shape of <a href="https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct" target="_blank" rel="noreferrer">EIP-712 Type Declarations</a>.</p><p>By default, <code>Plug</code> ships with the base types that are needed to power declarative transactions however if you are seeking to build a more complex protocol, you can easily extend the types to meet your needs.</p><p>With your EIP-712 types defined, <code>Plug</code> will not only unlock the ability to generate the corresponding <code>TypeScript</code> logic, but the <code>Solidity</code> smart contract as well. This means that as soon as you declare the types used onchain you can immediately start using them in your application and broader protocol stack.</p><h2 id="composability" tabindex="-1">Composability <a class="header-anchor" href="#composability" aria-label="Permalink to &quot;Composability&quot;">​</a></h2><p>One of Plug&#39;s main advantages is its focus on composability. In traditional blockchain platforms, the components often exist as siloed entities with limited interoperability. Plug shatters these silos by ensuring that its elements can work synergistically.</p><p>The inherent composability allows developers to build complex decentralized applications that are more than just the sum of their parts. The use of conditional transactions particularly enriches smart contract interactions, making it possible to create intricate, multi-step decentralized workflows that were previously challenging or expensive to implement.</p><h2 id="extensibility" tabindex="-1">Extensibility <a class="header-anchor" href="#extensibility" aria-label="Permalink to &quot;Extensibility&quot;">​</a></h2><p>Plug&#39;s architecture is designed for extensibility. Unlike other solutions that offer a one-size-fits-all model, Plug is modular. This design enables you to tailor the framework to meet the unique demands of your specific project.</p><p>The protocol&#39;s extensible nature means it can evolve. As blockchain technology continues to advance, new modules can be added to Plug without requiring a complete overhaul of the existing infrastructure.</p><h2 id="modernity" tabindex="-1">Modernity <a class="header-anchor" href="#modernity" aria-label="Permalink to &quot;Modernity&quot;">​</a></h2><p>In a field where staying up-to-date is not just an advantage but a necessity, Plug excels by incorporating the latest advancements in blockchain technology and tooling. Plug offers a cutting-edge alternative to traditional transaction models by enabling conditional transactions built on top of <code>abitype</code>, <code>viem</code>, and <code>foundry</code>.</p><p>There is no dealing with legacy code or outdated technology. Plug is built for the future while enriching as much of the past as possible.</p><h2 id="minimal-integration-architecture" tabindex="-1">Minimal Integration Architecture <a class="header-anchor" href="#minimal-integration-architecture" aria-label="Permalink to &quot;Minimal Integration Architecture&quot;">​</a></h2><p>Plug delivers an unparalleled experience when it comes to implementing support for plugs in your protocol for one simple reason:</p><ol><li><strong>Integration has been designed to happen at the lowest level possible.</strong></li></ol><p>Contrary to the typical past approach that led smart contract developers to implement signatures as part of their key mechanism, transaction verification and execution is pushed to the very edge of the protocol. This means, that instead of keeping an entirely separate piece of logic and conditions held in your mind during development of the core mechanisms, you achieve genuine <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" target="_blank" rel="noreferrer">seperation of concerns</a> and can focus on the core of your protocol.</p><p>Instead of integrating an extensive set of functionality in the underlying pieces of your protocol, simply inherit the Plug framework and you&#39;re done. <strong>It&#39;s really that simple.</strong> Today, everyone is relying on very similar logic while all simultaneously having to implement it themselves. This is a huge waste of time and resources and Plug solves this.</p>',59),r=[n];function s(l,c,h,d,u,p){return t(),a("div",null,r)}const f=e(i,[["render",s]]);export{g as __pageData,f as default};
