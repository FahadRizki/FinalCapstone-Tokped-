import { Carousel } from "flowbite-react";

function CarouselComponent() {
    return (
        <div className="w-full mx-auto mt-1">
            <Carousel
                className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-auto"
                slide={true}
            >
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/11/28/9bd0d91c-4102-4a3c-85b0-bb2868dbbd12.jpg.webp?ect=4g"
                    alt="..."
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/12/6/f822230a-fd6e-4d17-b530-c0c1344b9576.jpg.webp?ect=4g"
                    alt="..."
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/12/2/22c0caa5-4eeb-49ac-b9cd-a0f3d215b871.jpg.webp?ect=4g"
                    alt="..."
                />
                <img
                    src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/11/29/0cebdb03-3dfc-4e3b-bce4-7bb8671ad1b4.jpg.webp?ect=4g"
                    alt="..."
                />
            </Carousel>
        </div>
    );
}

export default CarouselComponent