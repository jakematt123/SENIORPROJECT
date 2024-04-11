import { Client } from "~/app/api/Client";
import { db } from "~/server/db";

async function addItemToCart(userId, itemId, quantity) {
  try {
    // Find the user's shopping cart or create a new one if it doesn't exist
    let shoppingCart = await Client.dbRouter.shoppingCart.findUnique({
      where: {
        userId: userId,
      },
      include: {
        items: true,
      },
    });

    if (!shoppingCart) {
      shoppingCart = await db.shoppingCart.create({
        data: {
          userId: userId,
        },
      });
    }

    // Check if the item is already in the user's cart
    const existingCartItem = shoppingCart.items.find((item) => item.itemId === itemId);

    if (existingCartItem) {
      // If the item exists in the cart, update its quantity
      await db.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
      });
    } else {
      // If the item doesn't exist in the cart, create a new cart item
      await db.cartItem.create({
        data: {
          quantity: quantity,
          itemId: itemId,
          cartId: shoppingCart.id,
        },
      });
    }

    console.log('Item added to cart successfully');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Example usage
addItemToCart('user_id_here', 'item_id_here', 1)
  .then(() => {
    console.log('Item added to cart successfully');
  })
  .catch((error) => {
    console.error('Failed to add item to cart:', error);
  });