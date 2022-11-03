const formContainer=document.getElementById('search-form')
formContainer.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelector('#food-container').innerHTML='';
    let formData = new FormData(formContainer);
    // conso
    const searchContent = formData.get('food-search')
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchContent}`)
    .then(Response=>Response.json())
    .then(
        (data)=>{
        
            document.getElementById('header').style.backgroundImage=`url("${data.meals[0].strMealThumb}")`
            // console.log()
            data.meals.map((meal)=>{
                document.querySelector('#food-container').innerHTML+=
                `
                    <div class="food-recipt">
                        <h3>${meal.strMeal}</h3>
                        <img src="${meal.strMealThumb}" alt="">
                    </div>
                `
            })
    
        })
})


