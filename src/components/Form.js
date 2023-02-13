import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./form.css";

export default function Form() {
  const [title, setTitle] = useState("");
  const [nameid, setNameid] = useState("");
  //const [imageTemp, setImageTemp] = useState(null);
  // const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  /*   useEffect(() => {
    if (imageTemp) {
      setImage(URL.createObjectURL(imageTemp));
      console.log(imageTemp);
    }
  }, [imageTemp]); */

  /*   useEffect(() => {
    if (imageTemp) {
      let objectURL = URL.createObjectURL(imageTemp);
      imageRef.current = objectURL;
      setImage(imageRef.current);
    }
  }, [imageTemp]); */

  /*  //function for handling the form submission

  const createPost = async (formData) => {
    try {
      const res = await fetch("http://localhost:8060/api/recipes", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok) throw new Error("Something went wrong");
      const post = await res.json();
      return { post };
    } catch (error) {
      return { error };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await createPost(formSubmission);
      setFormSent(true);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    } */

  const fileUploadHandler = (event) => {
    event.preventDefault();
    setFormSent(true);

    let formData = new FormData();
    formData.append("title", title);
    formData.append("nameid", nameid);
    formData.append("type", type);
    formData.append("vegetarian", vegetarian);
    formData.append("instructions", instructions);
    formData.append("ingredients", ingredients);
    formData.append("selectedFile", selectedFile);

    axios
      .post("https://cookbook-project.onrender.com/api/recipes", formData, {
        headers: {
          "Content-type": "multipart-formdata",
        },
      })
      .then((res) => {
        console.log(formData);
      });
  };

  //For uncontrollod components (try using these inside the createPost()'s object above, on line 14, like so: {name: e.target.elements.name.value}):
  // console.log(e.target.elements);
  // console.log(e.target.elements.name.value);
  // console.log(e.target.elements.age.value);
  // console.log(e.target.elements.text.value);
  // console.log(e.target.elements.terms.checked);

  return (
    <div>
      <h1 className="form-title">Upload your recipe</h1>
      <p className="form-subtitle">
        Release your inner nonna and share your recipe on our cookbook.
      </p>
      <form
        onSubmit={fileUploadHandler}
        return
        className="form-container"
        action="/stats"
        encType="multipart/form-data"
        method="post"
      >
        <div className="form-input title">
          <label>
            <h5>Title</h5>
            <input
              type="text"
              className="form-text-input"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                const lowerCase = e.target.value
                  .replaceAll(" ", "-")
                  .toLowerCase();
                setNameid(lowerCase);
              }}
            />
          </label>
        </div>
        <div className="form-input img">
          <label>
            <h5>Image</h5>
            <input
              type="file"
              accept="image/*"
              className="form-control-file"
              name="selectedFile"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            ></input>
          </label>
        </div>
        {/* <label>
            <h5>Image link</h5>
            <input
              className="form-text-input"
              type="text"
              name="img"
              accept="image/*"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </label> */}
        <div className="form-input type">
          <h5>Type</h5>
          <label>
            <h6>Starters</h6>
            <input
              className="form-text-radio"
              type="radio"
              id="starters"
              name="type"
              value="starters"
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            <h6>Pasta</h6>
            <input
              className="form-text-radio"
              type="radio"
              id="pasta"
              name="type"
              value="pasta"
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label>
            <h6>Dessert</h6>
            <input
              className="form-text-radio"
              type="radio"
              id="dessert"
              name="type"
              value="dessert"
              onChange={(e) => setType(e.target.value)}
            />
          </label>
        </div>
        <div className="form-input vegetarian">
          <label>
            <h5 className="vegetarian-text">Vegetarian</h5>
            <input
              className="form-text-checkbox"
              type="checkbox"
              name="vegetarian"
              value={vegetarian}
              onChange={(e) => {
                if (e.target.checked) {
                  setVegetarian(true);
                } else {
                  setVegetarian(false);
                }
              }}
            />
          </label>
        </div>
        <div className="form-input ingredients">
          <label>
            <h5>Ingredients</h5>
            <textarea
              className="textarea"
              name="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="form-input ingredients">
          <label>
            <h5>Instructions</h5>
            <textarea
              className="textarea"
              name="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </label>
        </div>
        <button className="form-nav-bttn">Submit</button>
      </form>
      {formSent && (
        <div className="form-mssg">
          <p className="form-txt">
            Well done! Nonna will review your recipe and share it soon.
          </p>
          <img
            src="https://www.elizabethminchilli.com/wp-content/uploads/2020/02/Nonna-1.jpeg"
            className="form-img"
          ></img>
        </div>
      )}
    </div>
  );
}
