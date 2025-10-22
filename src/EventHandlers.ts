/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { ERC20Minter, ERC20Minter_MintComment } from "generated";

ERC20Minter.MintComment.handler(async ({ event, context }) => {
  const entity: ERC20Minter_MintComment = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    tokenContract: event.params.tokenContract.toLowerCase(),
    tokenId: event.params.tokenId.toString(),
    comment: event.params.comment,
    transactionHash: event.transaction.hash,
    timestamp: event.block.timestamp,
    chainId: event.chainId
  };

  context.ERC20Minter_MintComment.set(entity);
});
