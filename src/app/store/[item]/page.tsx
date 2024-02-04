export default function ProductDetails( { params }: {
    params: { item: string }
}) {
    return <h1>Details about product {params.item}</h1>
}