/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { ERC20Minter, ERC20Minter_ERC20RewardsDeposit } from "generated";
import getUsdcTransfer from "../lib/getUsdcTransfer";

ERC20Minter.ERC20RewardsDeposit.handler(async ({ event, context }) => {
  const usdcTransfer = await getUsdcTransfer(event);

  const entity: ERC20Minter_ERC20RewardsDeposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    collection: event.params.collection,
    currency: event.params.currency,
    tokenId: event.params.tokenId,
    recipient: usdcTransfer.recipient,
    spender: usdcTransfer.spender,
    amount: usdcTransfer.amount,
    transactionHash: event.transaction.hash,
    blockNumber: event.block.number,
  };

  context.ERC20Minter_ERC20RewardsDeposit.set(entity);
});
