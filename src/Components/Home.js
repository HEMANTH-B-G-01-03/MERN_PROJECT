import React from 'react';
import ca1 from '../Images/ca1.jpg'
import ca2 from '../Images/ca2.jpg'
import ca3 from '../Images/ca3.jpg'
import './Home.css'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return(
           
                <div className="fullpg vh-100">
                <div>
                    
                <div className='d-flex justify-content-center mt-2'>
                   <Carousel className='caros'>
                       <Carousel.Item className='car1 text-center'>
                         <img src={ca1} alt='' className='imgcar'></img>
                        <br/><br/><br/>
                        <Carousel.Caption className='car1 text-center'>
                         <h5>Roti,Paneer Butter masala </h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
            <img src={ca2} alt='' className='imgcar'></img>
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>PIZZA</h5>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
            <img src={ca3} alt='' className='imgcar'></img>
              <br/>
              <Carousel.Caption className='car1 text-center'>
                         <h5>VADA SAMBAR</h5>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
                </div>
                <hr/>
<div> <h2 class="txt1 text-center"> Some Top Pick Recipies  in and arround  Mangalore  !!</h2><br/></div>
                <div>
                <div class="container">
    <div class="row mt-3 px-2">
    <div class="col-md-4">

            <div class="card bg-info-subtle">
            <img src="https://i.pinimg.com/originals/65/ba/bf/65babfa10a37ee049e6b556f672103e5.jpg" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-cenr"> <h2>Masala Dosa </h2><br/></div>
                    <p calss="card-content">
                         <h4>Ingredients :</h4>
                    <li> 1 cup of rice (preferably parboiled rice)</li>
                    <li> 1/4 cup of urad dal (split black gram)</li>
                    <li> 1/4 teaspoon of fenugreek seeds</li>
                    <li>Water for soaking</li>
                    <li>Pinch of salt </li>
                                            
                    </p>
                    <p>
                        <h4>Instruction :</h4>

                        <li>Wash the rice and urad dal separately, and then soak them in water. Add fenugreek seeds to the urad dal while soaking. Let them soak for at least 6 hours, preferably overnight.</li>
                        <li>After soaking, drain the water from both the rice and urad dal.</li>
                        <li>Grind the urad dal and fenugreek seeds to a smooth and fluffy batter. Add a little water if needed while grinding.</li>
                        <li>Grind the rice to a slightly coarse consistency. The rice grains should be broken down, but not completely smooth.</li>
                        <li>Mix both the urad dal and rice batters together in a large bowl. Add salt and mix well.</li>
                        <li>Allow the batter to ferment for about 6-8 hours or until it doubles in volume. The fermentation time may vary depending on the temperature of your kitchen.</li>
                    </p>

                    <p>

                       <h4> Cooking Time :</h4> 
                          Each dosa takes about 2-3 minutes to cook on each side, so the total cooking time will depend on how many dosas you're making.
                        
                    </p>
                    <p>
                         <h4>Nutritional Information : </h4>
                    <li>Calories: 100-150 calories per dosa</li>
                    <li>Carbohydrates: 20-30 grams</li>
                    <li>Protein: 3-5 grams</li>
                    <li>Fat: 0-2 grams</li>
                    <li>Fiber: 1-2 grams</li>
                    </p>
                    <button class="btn btn-outline-success btn-sm" ><a href="#" class="bb">Explore Now </a> </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-primary-subtle">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AhoakEVsPY5tpO2spJrWjUBuSQ4Up8Cqz_NhOhXX0E3e6pG3O92yw9AIZt46jryM2RM&usqp=CAU" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h2>Poori Bhaji </h2><br/></div>
                    <p calss="card-content">
                        <h4> Ingredints :</h4>
                        <li>2 cups of whole wheat flour</li>
                        <li>1/2 teaspoon of salt</li>
                        <li>1 tablespoon of oil</li>
                        <li>Water for kneading</li>
                        <li>Oil for frying</li>
                        
                    </p>
                    <p>  <h4> Instruction :</h4> 
                        <li>In a mixing bowl, combine the whole wheat flour, salt, and 1 tablespoon of oil.</li>
                        <li>Gradually add water and knead the mixture into a smooth and firm dough.</li>
                        <li>Divide the dough into small, equal-sized balls.</li>
                        <li>Roll each ball into a small disc (about 4-5 inches in diameter).</li>
                        <li>Heat oil in a deep pan or kadai for frying.</li>
                        <li>Once the oil is hot, carefully slide in a poori.</li>
                        <li>Once the oil is hot, carefully slide in a poori.</li>

                    </p>
                    <p> <h4>Cooking Time :</h4> 
                    <li>Cooking time for Poori: Each poori takes about 2-3 minutes to fry. </li>
                    <li>Cooking time for Bhaji: About 15-20 minutes.</li> </p>
                    <p> Nutritional Information
                    <li>The nutritional content can vary based on serving sizes and specific ingredients used, but here's a rough estimate for a typical serving of Poori Bhaji:</li>
                    <li>Calories: 300-350 calories per serving (1 poori and a portion of bhaji).</li>
                    <li>Fat: 10-15 grams</li>
                    <li>Carbohydrates: 45-50 grams</li>
                    <li>Protein: 5-7 grams</li>
                    <li>Fiber: 6-8 grams
</li>
</p>
                                
                    <button class="btn btn-outline-success btn-sm">Explore now </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="data:image/jpeg;base64,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" alt="" height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h2>Rava Idly </h2><br/></div>
                    <p calss="card-content">
                        <h4>Ingredients :</h4>
                    <li>1 cup of semolina (rava)</li> 
                    <li>1 cup of yogurt (curd)</li> 
                    <li>1/4 cup of water</li> 
                    <li>1/2 teaspoon of mustard seeds</li> 
                    <li>A few curry leaves, chopped</li> 
                    <li>1/2 teaspoon of baking soda (or Eno fruit salt)</li>
                    <li>2 tablespoons of cooking oil</li>
                    <li> Pinch of salt </li>
                    </p>

                    <p> 
                        <h4> Instruction : </h4> 
                    <li>Heat 2 tablespoons of oil in a pan.
Add mustard seeds and cumin seeds. Let them splutter.
Add chopped green chilies, grated ginger, and curry leaves. Sauté for a minute.</li>
                    <li>Add semolina (rava) and roast it on low heat for about 5-7 minutes or until it turns light brown. Keep stirring to prevent burning.
Remove the roasted semolina from the heat and let it cool. </li>
                    <li>Once the roasted semolina has cooled down, add yogurt (curd) and mix well,
Add water and mix to form a smooth batter.</li>
                    <li>Grease the idly molds or a plate with oil.
Pour the batter into the molds or onto the plate.</li>
                    <li>Steam the idlies in a steamer for about 10-15 minutes or until a toothpick inserted into the idly comes out clean.</li>
                    

                    
                    </p>
                    <p ><h4> Nutritional Value :</h4>
                        <li>Calories: 150-200 calories per serving 2 idlies</li>
                        <li>Fat: 5-7 grams</li>
                        <li>Carbohydrates: 20-25 grams</li>
                        <li>Protein: 5-7 grams</li>
                        <li>Fiber: 2-3 grams</li>

                    </p>
                    <button class="btn btn-outline-success btn-sm" ><a href=" https://www.pabbasidealcafe.in/welcome" class="bb">Explore Now</a> </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://www.fnp.com/images/pr/l/v20221214202700/chocolaty-truffle-cake-15kg_1.jpg" alt=" " height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center">
                         <h2>Chocolate Truffle</h2><br/></div>
                    <p calss="card-content">
                        <h4> Ingredients :</h4>
                    <li>1 sheet of frozen puff pastry (thawed)</li> 
                    <li>1/4 cup of chocolate chips or chopped chocolate</li> 
                    <li>1 egg (for egg wash)</li> 
                    <li>Powdered sugar (for dusting, optional)</li> 
                    
                    </p>
                    <p> 
                        <h4>Instruction :</h4>
                        <li>Preheat your oven to 375°F (190°C).</li>
                        <li>In a microwave-safe bowl or using a double boiler, melt the chocolate chips or chopped chocolate, heavy cream, and butter together until smooth. Stir well,
Set the chocolate filling aside to cool slightly. </li>
                        <li> Roll out the thawed puff pastry sheet on a lightly floured surface to your desired size and thickness.</li>
                        <li> 
Cut the pastry into smaller rectangles or squares, depending on your preference. </li>
                        <li>Place a spoonful of the prepared chocolate filling in the center of each pastry piece.</li>
                        <li>Fold the pastry over the filling to create a rectangle or square shape.
Use a fork to press down along the edges to seal the pastry shut</li>
                        <li>Beat the egg in a small bowl.
Brush the beaten egg lightly over the top of each pastry to give them a shiny, golden finish.</li>

                        <li>Place the pastries on a baking sheet lined with parchment paper.
Bake in the preheated oven for approximately 15-20 minutes, or until the pastries are puffed up and golden brown.</li>

                        <li>Remove the pastries from the oven and allow them to cool on a wire rack.
Once cooled, you can dust them with powdered sugar if desired.</li>
                    </p>

                    <p> 
                        <h4> Nutritional Information :</h4> 
                        <li>Calories: 250-300 calories per pastry</li>
                        <li>Fat: 15-20 grams</li>
                        <li>Carbohydrates: 25-30 grams</li>
                        <li>Protein: 3-5 grams</li>
                        <li>Fiber: 2-3 grams</li>
                         </p>
                    <button class="btn btn-outline-success btn-sm" ><a href="#" class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="data:image/jpeg;base64,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" alt=" " height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h2>Mango Pastry</h2><br/></div>
                    <p calss="card-content">
                        <h4>Ingredients :</h4> 
                    <li>1 sheet of frozen puff pastry (thawed)</li> 
                    <li>1/4 cup of chocolate chips or chopped chocolate</li> 
                    <li>1 egg (for egg wash)</li> 
                    <li>Powdered sugar (for dusting, optional)</li> 
                    
                    </p>
                    <p> 
                        <h4>Instruction :</h4>
                        <li>Preheat your oven to 375°F (190°C).</li>
                        <li>In a microwave-safe bowl or using a double boiler, melt the chocolate chips or chopped chocolate, heavy cream, and butter together until smooth. Stir well,
Set the chocolate filling aside to cool slightly. </li>
                        <li> Roll out the thawed puff pastry sheet on a lightly floured surface to your desired size and thickness.</li>
                        <li> 
Cut the pastry into smaller rectangles or squares, depending on your preference. </li>
                        <li>Place a spoonful of the prepared chocolate filling in the center of each pastry piece.</li>
                        <li>Fold the pastry over the filling to create a rectangle or square shape.
Use a fork to press down along the edges to seal the pastry shut</li>
                        <li>Beat the egg in a small bowl.
Brush the beaten egg lightly over the top of each pastry to give them a shiny, golden finish.</li>

                        <li>Place the pastries on a baking sheet lined with parchment paper.
Bake in the preheated oven for approximately 15-20 minutes, or until the pastries are puffed up and golden brown.</li>

                        <li>Remove the pastries from the oven and allow them to cool on a wire rack.
Once cooled, you can dust them with powdered sugar if desired.</li>
                    </p>

                    <p> 
                        <h4>Nutritional Information:</h4>
                        <li>Calories: 250-300 calories per pastry</li>
                        <li>Fat: 15-20 grams</li>
                        <li>Carbohydrates: 25-30 grams</li>
                        <li>Protein: 3-5 grams</li>
                        <li>Fiber: 2-3 grams</li>
                         </p>
                    <button class="btn btn-outline-success btn-sm" ><a href="#" class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        

        <div class="col-md-4">
            <div class="card bg-info-subtle">
            <img src="https://www.flurys.com/cdn/shop/products/BlackForestCake_3.jpg?v=1676363141&width=1024" alt=" " height="250px"></img>
                <div class="card-body">
                    <div class="card-title text-center"> <h2>Black Forest </h2><br/></div>
                    <p calss="card-content">
                        <h4>Ingredients :</h4>
                    <li>1 sheet of frozen puff pastry (thawed)</li> 
                    <li>1/4 cup of chocolate chips or chopped chocolate</li> 
                    <li>1 egg (for egg wash)</li> 
                    <li>Powdered sugar (for dusting, optional)</li> 
                    
                    </p>
                    <p> 
                        <h4>Instruction :</h4>
                        <li>Preheat your oven to 375°F (190°C).</li>
                        <li>In a microwave-safe bowl or using a double boiler, melt the chocolate chips or chopped chocolate, heavy cream, and butter together until smooth. Stir well,
Set the chocolate filling aside to cool slightly. </li>
                        <li> Roll out the thawed puff pastry sheet on a lightly floured surface to your desired size and thickness.</li>
                        <li> 
Cut the pastry into smaller rectangles or squares, depending on your preference. </li>
                        <li>Place a spoonful of the prepared chocolate filling in the center of each pastry piece.</li>
                        <li>Fold the pastry over the filling to create a rectangle or square shape.
Use a fork to press down along the edges to seal the pastry shut</li>
                        <li>Beat the egg in a small bowl.
Brush the beaten egg lightly over the top of each pastry to give them a shiny, golden finish.</li>

                        <li>Place the pastries on a baking sheet lined with parchment paper.
Bake in the preheated oven for approximately 15-20 minutes, or until the pastries are puffed up and golden brown.</li>

                        <li>Remove the pastries from the oven and allow them to cool on a wire rack.
Once cooled, you can dust them with powdered sugar if desired.</li>
                    </p>

                    <p>
                        <h4> Nutritional Information:</h4>
                        <li>Calories: 250-300 calories per pastry</li>
                        <li>Fat: 15-20 grams</li>
                        <li>Carbohydrates: 25-30 grams</li>
                        <li>Protein: 3-5 grams</li>
                        <li>Fiber: 2-3 grams</li>
                         </p>
                    <button class="btn btn-outline-success btn-sm" ><a href="#" class="bb">Explore Now </a></button>
                </div>
            </div>
        </div>
        
       
        
    </div>
</div>
</div>
<br/>


    
    <script src="js/bootstrap.bundle.js"></script>
</div>
          
    );
}
export default Home;