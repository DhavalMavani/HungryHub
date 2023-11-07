import React, { useState } from "react";

function Section({ title, description, isVisible, setIsVisible }) {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-l"> {title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible()}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p className="text-base">{description}</p>}
    </div>
  );
}

function Instamart() {
  const [visibleSection, setVisibleSection] = useState("")
  return (
    <div>
      <Section
        setIsVisible={()=>{ visibleSection=="about" ?  setVisibleSection("") : setVisibleSection("about") }}
        isVisible={visibleSection=="about"}
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet posuere accumsan. Sed interdum, risus in cursus commodo, magna lorem feugiat eros, in vehicula tellus felis et odio. Nullam quis commodo ante. Curabitur non ligula tempor, dictum leo non, ornare est. Praesent aliquam bibendum lacus, ut tincidunt orci maximus quis. Mauris semper at ligula ut molestie. Ut viverra ultricies lacus. Quisque ullamcorper in nisi eu vestibulum. Mauris sed sapien eget orci suscipit efficitur ac quis est."
      />
      <Section
        setIsVisible={()=>{ visibleSection=="team" ?  setVisibleSection("") : setVisibleSection("team") }}
        isVisible={visibleSection=="team"}
        title="Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet posuere accumsan. Sed interdum, risus in cursus commodo, magna lorem feugiat eros, in vehicula tellus felis et odio. Nullam quis commodo ante. Curabitur non ligula tempor, dictum leo non, ornare est. Praesent aliquam bibendum lacus, ut tincidunt orci maximus quis. Mauris semper at ligula ut molestie. Ut viverra ultricies lacus. Quisque ullamcorper in nisi eu vestibulum. Mauris sed sapien eget orci suscipit efficitur ac quis est."
      />
      <Section
        setIsVisible={()=>{ visibleSection=="careers" ?  setVisibleSection("") : setVisibleSection("careers") }}
        isVisible={visibleSection=="careers"}
        title="Careers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet posuere accumsan. Sed interdum, risus in cursus commodo, magna lorem feugiat eros, in vehicula tellus felis et odio. Nullam quis commodo ante. Curabitur non ligula tempor, dictum leo non, ornare est. Praesent aliquam bibendum lacus, ut tincidunt orci maximus quis. Mauris semper at ligula ut molestie. Ut viverra ultricies lacus. Quisque ullamcorper in nisi eu vestibulum. Mauris sed sapien eget orci suscipit efficitur ac quis est."
      />



    </div>
  );
}

export default Instamart;
