export const injectSVGColors = (svg: SVGElement, colorClass: string) => {
    svg.classList.add(colorClass);
    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => path.classList.add("fill-current"));
};
