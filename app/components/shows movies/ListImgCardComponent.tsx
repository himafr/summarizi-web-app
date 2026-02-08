import {  testMovie } from "../../services/premadeData";
import { CardType, ShowType } from "../../_@types/types";
import ImgCardMovieComponent from "./ImgCardMovieComponent";
import ImgCardShowComponent from "./ImgCardShowComponent";

function ListImgCardComponent({ category, type }: CardType) {
  if (type == ShowType.Movie) {
    return (
      <div className="flex overflow-x-auto space-x-4 mt-10">
        <ImgCardMovieComponent
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        <ImgCardMovieComponent
          
          movie={testMovie}
        />
        
      </div>
    );
  } else if (type == ShowType.Show) {
    return (
      <div className="flex overflow-x-auto space-x-4 mt-10">
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
      </div>
    );
  }
}

export default ListImgCardComponent;
