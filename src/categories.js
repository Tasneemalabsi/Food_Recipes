import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Category (){
    const [areas, setAreas] = useState([]);
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState([]); // Initialize to an empty array
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedArea, setSelectedArea] = useState("All");
    async function logAreas() {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        const data = await response.json();
    
        setAreas(data.meals);
      }
      async function logCategories(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
        const data = await response.json();
    
        setCategories(data.meals);
      }
      async function showCategories(){
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await response.json();
    
        setShow(data.categories);
      }

      async function handleAreas (e){
        let selectValue = e.target.value;
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectValue}`);
        const data = await response.json();
    
        setShow(data.meals);
        setSelectedArea(selectValue)

      }
      async function handleCategories (e){
        let selectValue = e.target.value;
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectValue}`);
        const data = await response.json();
    
        setShow(data.meals);
        setSelectedCategory(selectValue)

      }
    
      useEffect(() => {
        logAreas();
        logCategories();
        showCategories();
      }, []); 
    return(
        <>
            <h1>Filter Items by:</h1>
            <label>Areas: </label>
            <Form.Select aria-label="Default select example" name="area" onChange={handleAreas}>
            <option value="All">All</option>
                {areas.map((quiz, index) => (
                    <>
                    
                
                <option value={quiz.strArea}>{quiz.strArea}</option>
    
                    </>
                ))}
                </Form.Select>
                <label>Categories: </label>
                <Form.Select aria-label="Default select example" name="categories" onChange={handleCategories}>
                <option value="All">All</option>
                {categories.map((quiz, index) => (
                    <>
                    
                
                <option value={quiz.strCategory}>{quiz.strCategory}</option>
    
                    </>
                ))}
                </Form.Select>

                <ul style={{  display: "flex",flexWrap:"wrap",gap: "20px",justifyContent: "space-between"}}>
                {show.map((quiz, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={selectedCategory === "All" && selectedArea === "All" ? quiz.strCategoryThumb : quiz.strMealThumb} />
            <Card.Body>
              <Card.Title>{selectedCategory === "All" && selectedArea === "All" ? quiz.strCategory : quiz.strMeal}</Card.Title>
              <Button variant="primary">Show Description</Button>
            </Card.Body>
          </Card>
        ))}
      </ul>


        </>
    )
}

export default Category;