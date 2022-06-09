import React from 'react'

export default function PreviewImage({file}) {

    console.log(typeof file, file)
    const [preview,setPreview] = React.useState(null);

    const reader = new FileReader();
  try{
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);

        console.log(preview )
    };
}
catch(e)
{
    console.log(e)
}

  return (
    <div>
       {preview ? <img src={preview} alt='preview' width=" 200px" height="200px" /> :"loading..."}
    </div>
  )
}
