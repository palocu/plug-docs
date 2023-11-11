---
head:
    - - meta
      - property: og:title
        content: getSignedIntentsHash
    - - meta
      - name: description
        content: Encode a SignedIntents into a hash and verify the decoded data to verify type compliance.
    - - meta
      - property: og:description
        content: Encode a SignedIntents into a hash and verify the decoded data to verify type compliance.
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---
        
# getSignedIntentsHash

Encode a [SignedIntents](/generated/base-types/SignedIntents) into a hash and verify the decoded [SignedIntents](/generated/base-types/SignedIntents) data from a hash to verify type compliance.

## Parameters

- `$input` : [SignedIntents](/generated/base-types/SignedIntents) : The `SignedIntents` data to encode.

## Returns

- `$hash` : `bytes32` : The packet hash of the encoded [SignedIntents](/generated/base-types/SignedIntents) data.

## Onchain Implementation

With `getSignedIntentsHash` you can call the function as a `read` and get the encoded data back as a hash. 
        
This is helpful in times when you need to build a message hash without tracking down all the types as well as when you need to verify a signed message hash containing a `SignedIntents` data type.

::: code-group

``` solidity [Types.sol:getSignedIntentsHash]
function getSignedIntentsHash(
	SignedIntents memory $input
) public pure virtual returns (bytes32 $hash) {
	$hash = keccak256(abi.encode(
		SIGNED_INTENTS_TYPEHASH,
		getIntentsHash($input.intents),
		keccak256($input.signature)
	));
}
``` 

:::