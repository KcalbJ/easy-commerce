
function productCard() {
  return (
    <div className="flex flex-col items-center gap-2 md:items-start md:gap-1">
    <img
      alt="Image"
      className="aspect-square rounded-lg object-cover object-center"
      height="200"
      src="/placeholder.svg"
      width="200"
    />
    <div className="space-y-1">
      <h3 className="font-semibold">Trending</h3>
      <Link className="underline underline-offset-4" href="#">
        Shop Now
      </Link>
    </div>
  </div>
  )
}

export default productCard