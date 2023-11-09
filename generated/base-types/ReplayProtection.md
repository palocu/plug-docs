---
head:
    - - meta
      - property: og:title
        content: ReplayProtection
    - - meta
      - name: description
        content: A ReplayProtection data type provides EIP-712 compatability for encoding and decoding.
    - - meta
      - property: og:description
        content: A ReplayProtection data type provides EIP-712 compatability for encoding and decoding. 
notes:
    - - author: Auto generated by @nftchance/emporium-types/cli
---

# ReplayProtection

A [ReplayProtection](/generated/base-types/ReplayProtection) data type provides EIP-712 compatability for encoding and decoding the data needed for an `Intent` to be securely distributed and executed. 

## The Data Type

To interact with the data type onchain will you need both the `Typescript` and `EIP-712` representations of the `ReplayProtection` data type: 

::: code-group

``` typescript [Typescript/Javascript]
{
    nonce: bigint,
	queue: bigint 
}
```

```typescript [EIP-712]
{
    { name: 'nonce', type: 'uint256' },
	{ name: 'queue', type: 'uint256' } 
}
```

:::

::: tip

The `Typescript` representation is used to build and work with the object in your dApp and API while the `EIP-712` representation is used to encode and decode the data type onchain.

:::

## Onchain Implementation

With `nonce` and `queue` as the fields of the `ReplayProtection` data type we can generate the type hash as follows:

::: code-group

```solidity [Verbose.sol]
bytes32 constant REPLAY_PROTECTION_TYPEHASH = keccak256(
    abi.encodePacked(
        "ReplayProtection(",
		"uint256 nonce",
		"uint256 queue",
        ")"
    )
);
```

```solidity [Inline.sol]
bytes32 constant REPLAY_PROTECTION_TYPEHASH = keccak256(
    'ReplayProtection(uint256 nonce,uint256 queue)'
);
```

```solidity [Hash.sol]
bytes32 constant REPLAY_PROTECTION_TYPEHASH = 0xfa66270feae79570dcb7f156d937c5c71c57d7c3c25e36c4e016664b1c6ea232
```

:::