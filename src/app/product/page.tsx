
import { ItemsData } from '@type/item';
import GridItem from '@&/view/griditem';
import { EMPTY_DISCOUNT } from '@type/item';

const TestingGridView = () => {
    const Products: ItemsData = {
        items: [
            {
                id: 1,
                images: ['https://picsum.photos/id/100/1024/1024'],
                price: 10.25,
                available: true,
                available_quantity: 100,
                brand: "ZotShop",
                model: "ZotShop",
                category_id: 1,
                short_description: "ZotShop",
                rating: { value: 0, count: 0 },
                discount: '-10%',
                long_description: "ZotShop",
                title: "ZotShop",
            },
            {
                id: 2,
                images: ['https://picsum.photos/id/101/1024/1024'],
                price: 15.25,
                available: false,
                available_quantity: 50,
                brand: "ZotShop",
                model: "ZotShop",
                category_id: 1,
                short_description: "ZotShop",
                rating: { value: 0, count: 0 },
                discount: EMPTY_DISCOUNT,
                long_description: "ZotShop",
                title: "ZotShop",
            },
            {
                id: 3,
                images: ['https://picsum.photos/id/102/1024/1024'],
                price: 20.25,
                available: true,
                available_quantity: 150,
                brand: "ZotShop",
                model: "ZotShop",
                category_id: 1,
                short_description: "ZotShop",
                rating: { value: 0, count: 0 },
                discount: EMPTY_DISCOUNT,
                long_description: "ZotShop",
                title: "ZotShop",
            }
        ]
    };

	return (
        <div className="div-c flex-col w-[768px] h-[4096px] bg-secondary  overflow-hidden">
            <GridItem data={Products.items[0]} width={256} height={512} />
        </div>
    );
};

export default TestingGridView;