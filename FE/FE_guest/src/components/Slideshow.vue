<style>
    .slideshow {
        border-radius: 10px;
    }
    .slideshow img {
        height: 500px;
        width: 100%;
    }
</style>
<template>
        <div id="carouselExampleIndicators" class="carousel slide slideshow shadow-sm" data-ride="carousel" >
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb4841f90b9b56efd/62c6f28ba9f4bf4485d4f685/Manchester_United_2022-23_home_kit.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta24ddd12cb9a424a/62beb6885eb55658ba118e88/Real_Madrid_away_kit.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://cdnimg.vietnamplus.vn/t870/uploaded/zgnokt/2021_01_18/vnpaodtvn2021.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
    
</template>