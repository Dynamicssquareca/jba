import Link from "next/link";
import Image from 'next/image'
function CategoryHome({homecategory}) {
  return (
    <>
      <div className="category-home-wraper">
        {homecategory && homecategory.map((item,i)=>{
     return <div className="pic" key={i}>
       <Link href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}>
       
      <Image
      src={item.category_image_url}
      alt="Picture of the author"
      width={309}
      height={309}
    />
      </Link>
     </div>
    })}
      
      </div>
    </>
  );
}
export default CategoryHome;
