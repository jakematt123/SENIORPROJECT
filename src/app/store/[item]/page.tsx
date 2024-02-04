export default function ProductDetails( { params }: {
    params: { item: String }
}) {
    return <h1>Details about product {params.item}</h1>
}