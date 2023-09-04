import React, { useState } from 'react';

const Menu = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const recipes = [
    {
      title: "Paneer Gheeroast",
      imageUrl: "https://th.bing.com/th/id/OIP.J1z1rfZEnkmSNj4XYCcX1QHaEK?pid=ImgDet&rs=1",
      ingredients: [ <p> <li> 250 grams paneer (cottage cheese) and  cut into cubes
        2 tablespoons thick yogurt</li>
        <li> 1 teaspoon ginger-garlic paste and 
1/2 teaspoon red chili powder (adjust to your spice preference)</li>
<li> 1/2 teaspoon turmeric powder
Salt to taste</li> <li> 2 tablespoons ghee (clarified butter) and 
1 teaspoon mustard seeds</li>
<li>1 teaspoon cumin seeds and 
10-12 curry leaves </li>
<li> 1 onion, finely chopped and 
2-3 dried red chilies, soaked in warm water</li>
<li> 1 teaspoon tamarind paste and 
Salt to taste</li></p>],
      instructions: [<p><li>In a mixing bowl, combine the yogurt, ginger-garlic paste, red chili powder, turmeric powder, and salt.</li>
      <li>Add the paneer cubes to the marinade and gently coat them. Let it marinate for about 30 minutes.</li>
      <li>Heat ghee in a pan over medium heat and 

Add mustard seeds and let them splutter.</li>
<li>Add cumin seeds and curry leaves. Sauté for a minute and 

Add finely chopped onions and sauté until they turn golden brown.</li>
<li>While the onions are cooking, blend the soaked dried red chilies into a smooth paste using a little water.

Add the red chili paste to the pan and cook for a few minutes until the oil begins to separate.</li>
<li>Add the marinated paneer cubes and tamarind paste to the pan. Mix well to coat the paneer with the masala.

Cook for an additional 5-7 minutes, stirring occasionally, until the paneer is nicely roasted and coated with the masala. Adjust salt if needed.</li>
<li>Garnish with fresh coriander leaves and serve hot.</li>
</p>],
      cooking_Time:[<p>The cooking time for making Paneer Ghee Roast is approximately 20-25 minutes.</p>],
      Nutritional_Value:[<p> <li> Calories: 250-300 kcal
         Fiber: 2-3g</li>
        <li>Protein: 10-12g</li>
        <li> Carbohydrates: 10-12g</li>
        <li>Fat: 18-20g</li></p>]
    },
    {
      title: "Gobi manchurian",
      imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/gobi-manchurian-cauliflower-manchurian.jpg.webp",
      ingredients: [<p> <li>1 medium-sized cauliflower and  cut into small florets and 
        1 cup all-purpose flour
        1/4 cup cornstarch</li>
        <li> 1 teaspoon ginger-garlic paste and 
1/2 teaspoon red chili powder (adjust to your spice preference) and 
Salt to taste</li>
<li>Water, as needed
Vegetable oil for frying</li></p>],
      instructions: [<p> <li>In a mixing bowl, combine the all-purpose flour, cornstarch, ginger-garlic paste, red chili powder, salt, and enough water to make a thick batter.</li>
      <li>Dip the cauliflower florets into the batter, ensuring they are well-coated.</li>
      <li>Heat vegetable oil in a deep frying pan over medium-high heat. Once the oil is hot, carefully add the coated cauliflower florets one by one.</li>
      <li>Fry until the florets turn golden brown and crispy. Remove them from the oil and place them on paper towels to remove excess oil.</li></p>],
      cooking_Time:[<p>The cooking time for making Gobi Manchurian is approximately 30-40 minutes.</p>],
      Nutritional_Value:[<p> <li> Calories: 250-300 kcal
        Fiber: 2-3g</li>
       <li>Protein: 10-12g</li>
       <li> Carbohydrates: 10-12g</li>
       <li>Fat: 18-20g</li></p>]
    },
    {
      title: "Pulav",
      imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2014/07/VegPulao1.jpg",
      ingredients: [<p> </p>],
      instructions: [<p> <li> Rinse the rice thoroughly under running water until the water runs clear.
        Soak the rice in water for about 30 minutes, then drain.</li>
        <li> Heat ghee or vegetable oil in a large, heavy-bottomed pan or a rice cooker over medium heat.
Add cumin seeds and let them sizzle.</li>
<li> Add the bay leaf, cloves, green cardamom pods, and cinnamon stick. Sauté for a minute until they become fragrant.</li>
<li> Add the finely chopped onions and slit green chilies.
Sauté until the onions turn translucent and lightly browned.</li>
<li> Add the chopped mixed vegetables (carrots, peas, beans, etc.).
Sauté for a few minutes until they begin to soften.</li>
<li> Add turmeric powder, garam masala, and salt to the pan.
Stir well to coat the vegetables with the spices</li>
<li> Add the drained rice to the pan and stir gently to combine it with the vegetables and spices.
Pour in 2 cups of water and bring the mixture to a boil.</li>
<li> Once the mixture comes to a boil, reduce the heat to low, cover the pan with a tight-fitting lid, and let it simmer for about 15-20 minutes or until the rice is cooked and the water is absorbed. Alternatively, you can transfer everything to a rice cooker and cook according to the rice cooker instructions.
  </li>
  <li> Once the rice is cooked, remove the pan from heat and let it sit, covered, for a few minutes.
Fluff the pulav with a fork to separate the grains.
Garnish with fresh coriander leaves or mint leaves, if desired.</li></p>],
      cooking_Time:[<p>The cooking time for making Vegetable Pulav is approximately 30-40 minutes, including preparation and cooking time.</p>],
      Nutritional_Value:[<p><li> Calories: 200-250 kcal</li>
        <li>Protein: 4-5g</li>
       <li>Carbohydrates: 35-40g</li> 
        <li>Fat: 5-7g </li>
       <li> Fiber: 2-3g</li></p>]
    },
    {
      title: "PUNDI ",
      imageUrl: "https://static.wixstatic.com/media/6ca54b_149a315991474e21a1b8ece55b8d1911~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6ca54b_149a315991474e21a1b8ece55b8d1911~mv2_d_6000_4000_s_4_2.jpg",
      ingredients:[<p> <li>1 cup rice flour and 
        1 cup grated fresh coconut</li> <li>1 cup water and 
1/2 teaspoon salt</li>
<li> 2 tablespoons vegetable oil and 
1 teaspoon mustard seeds</li>
<li> 1 teaspoon urad dal (split black gram) and 
1 teaspoon chana dal (split chickpeas)</li>
<li> A few curry leaves
2-3 dried red chilies, broken into pieces</li>
<li>1/2 teaspoon asafoetida (hing)</li></p>],
      instructions: [<p><li>In a saucepan, bring one cup of water to a boil and 

        Add salt to the boiling water.</li>
        <li> Gradually add the rice flour to the boiling water while stirring continuously to avoid lumps.

Reduce the heat to low and continue stirring the mixture until it thickens and forms a </li>
<li>Remove the dough from heat and let it cool slightly.

Once the dough is cool enough to handle, knead it well until it becomes smooth and pliable.</li>
<li> Divide the dough into small portions and roll them into round dumplings, about the size of a lemon.

Flatten each dumpling slightly to create a small, thick disc. You can make an indentation in the center of each dumpling with your thumb, if desired</li>
<li>Steam the dumplings in a steamer for 15-20 minutes, or until they become firm and cooked through. You can also use an idli steamer or any other steaming equipment. </li></p>],
      cooking_Time:[<p> The cooking time for making Pundi is approximately 30-40 minutes, including steaming time.</p>],
      Nutritional_Value:[<p> <li> Calories: 100-120 kcal</li>
        
        <li>Protein: 2-3g </li>
        <li>Fat: 2-3g</li>
        <li>Fiber: 1-2g</li>
        </p>]
    },
    {
      title: "Paneer Tikka",
      imageUrl: "https://1.bp.blogspot.com/-wOk65sO6K7U/Xyh5G6U_5gI/AAAAAAAABPs/r-Z8s-_8HrUQa3-bV2yrDAQ6mLZH4GZswCNcBGAsYHQ/s2048/DSC_8030%2Bcopy.jpg",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
      instructions: [<p> <li>In a mixing bowl, combine the thick yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, salt, and vegetable oil. Mix well to form a smooth marinade. </li>
      <li> Add the paneer cubes to the marinade and gently coat them. Let the paneer marinate for at least 30 minutes in the refrigerator. You can also marinate it for a few hours or overnight for more flavor.</li>
      <li>Preheat your grill or oven to medium-high heat (around 200°C or 400°F). If using wooden skewers, soak them in water for about 30 minutes to prevent burning.</li>
      <li> Thread the marinated paneer cubes, bell pepper chunks, and onion chunks alternately onto the skewers.</li>
      <li> Place the skewers on the grill or in the oven and cook for about 15-20 minutes, turning occasionally, until the paneer and vegetables are cooked and have a slightly charred appearance. You can also baste the skewers with a little oil or melted butter for added flavor and to prevent sticking.</li>
      <li> Once the paneer tikka is cooked and has a nice smoky flavor, remove it from the grill or oven.</li>
      <li> Garnish the paneer tikka with fresh lemon wedges and chopped coriander leaves.</li>
      <li> Serve hot as an appetizer or with naan or roti as a side dish. You can also serve it with mint chutney or yogurt-based sauce.</li></p>],
      cooking_Time:[<p>The cooking time for making Paneer Tikka is approximately 15-20 minutes, depending on your grill or oven settings</p>],
      Nutritional_Value:[<p> <li> Calories: 250-300 kcal</li>
        <li>Protein: 10-12g</li>
        <li> Carbohydrates: 10-12g</li>
        <li>Fat: 18-20g</li>
        <li>Fiber: 2-3g</li></p>]
    },
    {
      title: "Gudbad Ice-cream",
      imageUrl: "https://i.ytimg.com/vi/LvyGMCRNnw8/mqdefault.jpg",
      ingredients: [<p> <li>2 cups vanilla ice cream</li>
      <li> 1/2 cup mixed fruit jam (your choice of flavors)</li>
      <li> 1/2 cup tutti-frutti (candied fruits)</li>
      <li> 1/4 cup roasted nuts</li>
      <li> Fresh fruits (e.g., banana, mango, pineapple), diced</li>
      <li> Cherries for topping</li>
      </p>],
      instructions: [<p> <li> Allow the vanilla ice cream to soften slightly by taking it out of the freezer for a few minutes.
        Transfer the softened ice cream into a mixing bowl.</li> 
        <li> Add 1/2 cup of mixed fruit jam to the softened ice cream.
Add 1/2 cup of tutti-frutti and chopped roasted nuts.</li>
<li> Gently fold all the ingredients together until well combined. Be careful not to overmix; you want to maintain the texture of the tutti-frutti and nuts.</li>
<li> Take serving glasses or bowls.</li><li>
Begin by adding a layer of the ice cream mixture.</li>
<li> Add another layer of the ice cream mixture on top of the fruits. </li>
<li> Place the glasses or bowls in the freezer for about 30 minutes to firm up the ice cream again.</li>
<li> 
Remove from the freezer, and your Gudbad Ice Cream is ready to serve.</li></p>],
      cooking_Time:[<p> The preparation time for making Gudbad Ice Cream is approximately 10-15 minutes.</p>],
      Nutritional_Value:[<p> <li> Calories: 250-300 kcal</li>
        <li> Protein: 4-5g</li>
       <li> Carbohydrates: 30-35g</li>
       
        <li>Fiber: 2-3g</li></p>]
    },
    
  ];

  return (
    <div className="back2 vh-100">
      <h1 className="text-center">Our other Top hit Recipes</h1>
      <br />

      <div className="container">
        <div className="row mt-3 px-2">
          {recipes.map((recipe, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-info-subtle">
                <img src={recipe.imageUrl} alt="" height="250px" />
                <div className="card-body">
                  <div className="card-title text-center">
                    <h4>{recipe.title}</h4>
                  </div>
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => toggleCard(index)}
                  >
                    {expandedCard === index ? "Hide" : "View now"}
                  </button>
                </div>

                {expandedCard === index && (
                  <div className="card mt-3">
                    <div className="card-body">
                      <h5 className="card-title">Recipe</h5>
                      <p className="card-text">
                        Ingredients:
                        <ul>
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </p>
                      <p className="card-text">
                        Instructions:
                        <pre>{recipe.instructions}</pre>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
