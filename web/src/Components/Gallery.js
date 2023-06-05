import { GalleryData } from "../Constants";
import { useEffect, useState } from "react";
import '../App.css'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";



function Gallery() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }

  return (
    <section id="gallery" className="w-full h-screen mx-auto ">
      <div id="gallery" className={`${styles.paddingX}`} >
        <motion.h2 initial="hidden" animate="show" variants={textVariant()} className={styles.sectionHeadText}>Gallery</motion.h2>
      </div>
      <motion.div initial="hidden" animate="show" variants={slideIn("right","spring",0.5,1)}  className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem object-contain"><img className="object-contain" src={item.image  } /></div> )
          }
        </div>
      </motion.div>
    </section>
  );
}

export default Gallery;