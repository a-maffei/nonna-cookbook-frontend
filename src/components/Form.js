import { useState, useEffect } from "react";
import "./form.css";
export default function Form() {
  const [title, setTitle] = useState("");
  const [nameid, setNameid] = useState("");
  const [imageTemp, setImageTemp] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (imageTemp) {
      setImage(URL.createObjectURL(imageTemp));
      console.log(imageTemp);
    }
  }, [imageTemp]);

  const formSubmission = {
    title,
    nameid,
    image,
    type,
    vegetarian,
    ingredients,
    instructions,
  };

  //function for handling the form submission

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
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }

    //For uncontrollod components (try using these inside the createPost()'s object above, on line 14, like so: {name: e.target.elements.name.value}):
    // console.log(e.target.elements);
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.age.value);
    // console.log(e.target.elements.text.value);
    // console.log(e.target.elements.terms.checked);
  };

  return (
    <fieldset>
      <legend>
        <h1>Share your recipe with nonna</h1>
      </legend>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label>
            Recipe title:
            <input
              type="text"
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
          <label>
            Image:
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={(e) => {
                console.log(e.target.files);
                setImageTemp(e.target.files[0]);
              }}
            ></input>
          </label>
          <div className="type">
            Type:
            <label>
              Starters
              <input
                type="radio"
                id="starters"
                name="type"
                value="starters"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label>
              Pasta
              <input
                type="radio"
                id="pasta"
                name="type"
                value="pasta"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label>
              Dessert
              <input
                type="radio"
                id="dessert"
                name="type"
                value="dessert"
                onChange={(e) => setType(e.target.value)}
              />
            </label>
          </div>
          <div className="vegetarian">
            <label>
              vegetarian
              <input
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
          <label>
            Ingredients:
            <textarea
              name="text"
              value={ingredients}
              onChange={(e) => {
                setIngredients(e.target.value);
              }}
            ></textarea>
          </label>
          <label>
            Instructions:
            <textarea
              name="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </label>

          <button>Submit</button>
        </div>
      </form>
    </fieldset>
  );
}
