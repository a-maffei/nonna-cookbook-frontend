import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [nameid, setNameid] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const formSubmission = {
    title,
    nameid,
    image,
    category,
    vegetarian,
    ingredients,
    instructions,
  };

  //function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await console.log(formSubmission);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }

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
              id="file"
              accept="image/jpeg , image/png , image/jpg"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
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
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
            <label>
              Pasta
              <input
                type="radio"
                id="pasta"
                name="type"
                value="pasta"
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
            <label>
              Dessert
              <input
                type="radio"
                id="dessert"
                name="type"
                value="dessert"
                onChange={(e) => setCategory(e.target.value)}
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
