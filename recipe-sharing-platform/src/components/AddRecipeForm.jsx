import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    cookingTime: "",
    difficulty: "Easy"
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    
    setFormData({ 
      ...formData, 
      [fieldName]: fieldValue 
    });
  };

  // Validate inputs
  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required";
    if (!formData.cookingTime.trim())
      newErrors.cookingTime = "Cooking time is required";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      // reset form
      setFormData({ 
        title: "", 
        ingredients: "", 
        steps: "", 
        cookingTime: "",
        difficulty: "Easy"
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 md:mt-10 p-4 md:p-6 bg-white shadow-lg rounded-xl md:rounded-2xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-800">
        Submit a New Recipe
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 md:mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs md:text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Cooking Time and Difficulty - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Cooking Time */}
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Cooking Time (minutes)
            </label>
            <input
              type="number"
              name="cookingTime"
              value={formData.cookingTime}
              onChange={handleChange}
              className="mt-1 md:mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="e.g., 30"
              min="1"
            />
            {errors.cookingTime && (
              <p className="text-red-500 text-xs md:text-sm mt-1">{errors.cookingTime}</p>
            )}
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-700">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="mt-1 md:mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className="mt-1 md:mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="List ingredients, one per line"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-xs md:text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm md:text-base font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="4"
            className="mt-1 md:mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Describe preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-xs md:text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <button
            type="button"
            onClick={() => setFormData({ 
              title: "", 
              ingredients: "", 
              steps: "", 
              cookingTime: "",
              difficulty: "Easy"
            })}
            className="w-full md:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transform hover:scale-105 transition duration-300 text-sm md:text-base"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="w-full md:flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 text-sm md:text-base"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;