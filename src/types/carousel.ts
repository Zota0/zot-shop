import { ReactElement } from "react";

export interface CarouselItem {
    title: string;
    url?: string;
    srcdoc?: ReactElement;
}
export type CarouselProps = CarouselItem[];

export type CarouselElementProps = {
    props: CarouselProps;
};