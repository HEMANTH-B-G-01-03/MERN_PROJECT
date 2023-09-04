import React, { useState } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import ca1 from '../Images/ca1.jpg'
import ca2 from '../Images/ca2.jpg'
import ca3 from '../Images/ca3.jpg'

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const recipes = [
    { title: " Masala Dosa  ",
    imageUrl: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
    ingredients: [<p> <li>2 cups of whole wheat flour</li>
     <li> 1 cup of rice (preferably parboiled rice)</li>
                    <li> 1/4 cup of urad dal (split black gram)</li>
                    <li> 1/4 teaspoon of fenugreek seeds</li>
                    <li>Water for soaking</li>
                    <li>Pinch of salt </li></p>],
    instructions: [<p> <li>Wash the rice and urad dal separately, and then soak them in water. Add fenugreek seeds to the urad dal while soaking. Let them soak for at least 6 hours, preferably overnight.</li>
    <li>After soaking, drain the water from both the rice and urad dal.</li>
    <li>Grind the urad dal and fenugreek seeds to a smooth and fluffy batter. Add a little water if needed while grinding.</li>
    <li>Grind the rice to a slightly coarse consistency. The rice grains should be broken down, but not completely smooth.</li>
    <li>Mix both the urad dal and rice batters together in a large bowl. Add salt and mix well.</li>
    <li>Allow the batter to ferment for about 6-8 hours or until it doubles in volume. The fermentation time may vary depending on the temperature of your kitchen.</li></p>],
    Cooking_Time:[ <p>
      Each dosa takes about 2-3 minutes to cook on each side, so the total cooking time will depend on how many dosas you're making.
      
    </p>],
    Nutritional_Value: [<p> 
<li>Calories: 100-150 calories per dosa</li>
                    <li>Carbohydrates: 20-30 grams</li>
                    <li>Protein: 3-5 grams</li>
                    <li>Fat: 0-2 grams</li>
                    <li>Fiber: 1-2 grams</li></p>],
      },
      {
        title: "Poori Bhaji ",
        imageUrl: "https://daddyscuisine.files.wordpress.com/2022/08/poori-bhaji.jpg?w=1200",
        ingredients: [<p> <li>2 cups of whole wheat flour</li>
        <li>1/2 teaspoon of salt</li>
        <li>1 tablespoon of oil</li>
        <li>Water for kneading</li>
        <li>Oil for frying</li></p>],
        instructions: [<p> <li>In a mixing bowl, combine the whole wheat flour, salt, and 1 tablespoon of oil.</li>
        <li>Gradually add water and knead the mixture into a smooth and firm dough.</li>
        <li>Divide the dough into small, equal-sized balls.</li>
        <li>Roll each ball into a small disc (about 4-5 inches in diameter).</li>
        <li>Heat oil in a deep pan or kadai for frying.</li>
        <li>Once the oil is hot, carefully slide in a poori.</li>
        <li>Once the oil is hot, carefully slide in a poori.</li></p>],
        Cooking_Time:[ <p>
          <li> Cooking time for Poori: Each poori takes about 2-3 minutes to fry. </li>
          <li> Cooking time for Bhaji: About 15-20 minutes </li>
          
        </p>],
        Nutritional_Value: [<p><li> The nutritional content can vary based on serving sizes and specific ingredients used, but here's a rough estimate for a typical serving of Poori Bhaji:</li>
        <li>Calories: 300-350 calories per serving (1 poori and a portion of bhaji).</li>
                    <li>Fat: 10-15 grams</li>
                    <li>Carbohydrates: 45-50 grams</li>
                    <li>Protein: 5-7 grams</li>
                    <li>Fiber: 6-8 grams
</li></p>],

      },
      {
        title: "Rava Idly ",
        imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUZGBgYGhwcGhwYHBkcHBwZGhkZGhwYGhwcIS4lHB4rJBoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABCEAACAQIEBAMFBwIFAwMFAQABAhEAAwQSITEFQVFhBiJxEzKBkaEHQlKxwdHwFHIjYoKy4ZKi8SRT0hYzQ0TCFf/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACURAAICAgICAQUBAQAAAAAAAAABAhEDIRIxBEFRBRMiYYFxMv/aAAwDAQACEQMRAD8A8iopJpZpwCiKSloAIopaSsAKKKKAEopaKAENdAVyKWgBYFcmlJpKAFmiaSlmgAmiiigAikiiigBQKXSkpQaAOwaWa5BrqgBZooooAZooorQCiKKKACiiisAKKIoigAmkpYoigBKK6iigDmKIrqiigOaIrqigBIpK6iigDmiaWkNABSzSUtAHQNLXIroVoC0UTRQA3SUtFYAURRU7hHC7uJurZspndvkBzZj91R1/XStAgmtXwLwBjsSAy2vZofv3pWR1CwWPyjvXrPg/7PsPgwruBdv752GinpbX7vrv35VsWdQNaVtLsyzyrA/Y2oE3sUxPS2ir9WLT8hVkv2RYEDW5iCeudB+SVtzxFASqkEjlMRzpGx3al+9FGbPO8X9kGHIPs8TdU8s4Rx8gFP1rJ8a+zPG2AWQLiEH/ALejf9Db/wCkk17ecX1Fcm6DtTLJCQW0fM68MuzBTKZiGIUgjcEHUH1pp8IwMGJ7a1734m8OWcYpDeS8B5Li9eQcffX6jkRXmvhHhr2eLWbGISHR20OoJCOyup5qdwfStaaZnJk/wl9l13EL7TEs9hD7iAD2jD8RDe6OxE+lapfsjwI3uYhv9aD8kr0MNVXxHjNq1IZ9RuBJ/KiUoQVyaRSMJS1FWZMfZXw8b+2Pq/7CnrX2bcL2yO3rdf8AQ0xxPxW7mLakL+MlRPYTVdwzilxrkguQeYJA3g69Qe1cuTzsUelf+HTHw5y70aaz9nnC1/8A1Qf7muN+bVL/APovhoGmDtfFQfzqjOOvIxIuu4cqNI8qjcbRJOaDUpPEN0HKVncaiNeRJmNYP0qcfqWFvdoaXg5F1sofFP2bWLoz4PLZuDdSW9m/pvkPpp2515LxPh1zD3Xs3VyuhhhIO4BBBGhBBBB717biuP6ZSuVu0xvG5ArB/a2n/qbNz/3MMhJ6sruD9Mtdkc2PKrg7OaeKWN1IwcV0KSimEFFL8aPhRrWgLHeijKaKAOKKKKwBVUkgASSYAGpJOgA6mvoj7PvCy4HDgso9u4DXG/JAfwrt6yedeQfZrw4X+IWgwBW3muEHqkZf+4qfhX0LiHyjShuo2K36Ev4iKp8Vi2zqoWZmTOgABPz+Vd3rvWm7zFVZ4JgSANWPoK5HbezTNWPELXMVcT2S5LQjOYDhjl8q5okEwNO1XvDrwysCuUqdhqDOsqTE7/Oa8ptcWNviLveLAyykRmyqx0WDECAK9R4RikyuMsbRIiRAIy9hTTglFNDNUyfPKgyKbYmCVAJgxPXueVR8LecoC6BX1lQZG+kHpEGpJGEi48jX51V4zALdv4XEgf4mHuhHPNrdwMkHrDupHTO1WF7aufD753cctD8RqPyFdOGbf4sVo64/xX2asM2XUyxmABpuOZrDPdzeYkLOgI3M+v51qfElqbrTqImCdJzEaRz1G9URsDNMTMgAidNMxMfzbrXh+Zl5ZnfrR7njRUcar2NHDKFDifMw1IE5eRE/Cp+AsQT1jVjJ17cuv81o/pgx8+wiBMST6RP0qargabH+CZ2muCeR1SOlRBcoJkAz7wgcjM+nOo14Bmb7qwDBG4IGm+3mjbnTo0A1JnrqZ0GvYiRPQUmGvM4JVfLHvCPN2A301/5pVdGspMfZy6liTvAiNNp7CTUH7SMKLlrBXJ+5cSe6lCJ+Zqz4mwAyr5pJ2+Z/ImmvFVsvwtHG9m+pP9rhk/Nkr2vpsnxaPM+pR/FSR5ZetFdx8RtTWarNz1qLesAajbp+1enHJemeVGd9kYE0opQRSZqsUCO9FGY0tAHEUqISQAJJ5UkVMsKAD1I19OnpSSkooxujYfZO6pxAKSCWtsJ7yjQO0A/KvbMb+9fNXCOINh8Rbvrujho6jZh8QSPjX0Xh8al+0lxCGVgGBHQ0JuUGTv2Rzryk10zwNeXKnEtgEkCktsIO2vP9qg6GPHfEfA7l/EvdtQVLSZJ3EduYAHwr0nhdkCxaYjUW0Go1nKJrBeK8bd/qblpEzecMYjUFE5DzSCNxtvXpWHt5baqd1QT20+tPOuOijulY5h3EGN9qaw9lkBzNmJJOkgdoBJjSK4wqIhceUFjnygAMSQAWPNtedd43FBRqeVRaoWyt4rxdElZJaQNATBO0wNKn+GRkte0fe5cRF753A/KTVBw7hj4vEuYK2wQCeRAE6HmdSO0VM8Z8WWxieHWgctsX5aOyhFJ7A3J/8VfDD2D6oneJWOcx2kddTznTr8DVHB6LpsNfnqNY0qy8Yu6srgShmWGqzyB6GSazH/8AsaTGmm2u50/SvA83FP78qXs93xpJ4kXltQsdT9dwfoPrTFzGoDlDKpzbfej59J+VUz8XykaGfWOv07dBXJ4qiqiEhM5hmESBlPM+7JjUa61CPjyb2XcqLpsUjFlLgAHTKQW1zAmZ02nt+T+HxAAKgbCJkCBGwE6evWoNprAAkoFEAAEbAa67zUHGcZRHcLDLCgEQPuqYHQydqz7TlqJlr2OcTuKEYARmWAYgxG8dYqbhrXtcBjLW59kXA/zJ/iD4ygrM4lruIIVEZ3MaICdzG/Ic62uMtpwzAXXuMDfuoUVeQZ1ICjrAJY+lex9PxSgm30ed5848eJ46xrljSA8qHNdT2eMkM3LQ3Hy/WmMvepSHWm79vmPj2quOfplYy9MZymlpMx6UtWHHLaQJpQxrpjXAFczduyLdnNb/AOzfxO1knDv5k3XqNdY+e1YE13hcS1t1dD5lMj9vjtTwfF2akfRwYOuZCGU8qhLfCELlygbCIjsByqg8OcVV0V7baFSY7jUr6xmH+jvWuS+GBDqGAjWOuxqs8MZbTo1MyOEgYm++UZmKkSAMyQq+9rMEHTTl61dpi1DHNqOn6VcLgLBnyAdeVPpw6wPuKT31pJYm0lYzdszlzEM7nImYnSQJMdJqXhfDruQ15sq/hB1PqeX81rR22AHlUD0EUjvvJ5VscKXews4VUtqERQqiBpXiX2sYvPiUQHW2kkjkzH84UV6t4h4wmHtu7tAUT6nIxAHevn/iGJuYm893IzM7EwoLED7q6DkAB8KbI6VGM9I8L+NkuKiXCM5hLiN7rg6ZxPXmOXpW+t+H8H739Oknt+lfPVvw9im2st8YX8yCK3XDeN8ZRFT2Vt8ogM7DMQPxEPBpOcJf9UPFzitWeppwjCrth7U9cik08uHtLtbQeiLXkOK8VcaUMWw6hVmSttmGnMQ5kd6pG+0LHn76D0QfqadSxroWUpez30Mn4V/6RS516L8hXzy/jrHtoL8T+FEn8jWq8PtxF4e/iXA/AAqn/UQv0FZLJjirBNs9M47x+1g7LXrhEL7qgDMz8kUdT9BJ2FeB+IvEl3GXM90gATlQHyrO/qTpr2FepYjBrcI9qVbkM+ViQSJAzcjUjDcNsIMqWUUdlUA/IVF5VLoHFniKsK6ivb8TwbD3BD2kM9VH85Vn+I/Z/YeTbLWz2OZf+k6j4Gk7EcTy0Cu177VO4twq5hnyXBB3Uj3WHVahE0rFY1/SPyIjlqKKdzUtU+6/gbkyOwrk121cBSxCqCSdgNTWJWYkNsanLwhymcnLOsEGY/c6aVd8C4YLTLccBnGuU7L27mtCzlpIXeNtNOQ9KSWVJ0i8YaKTw/w57TB1vOg0IAAEsJ1hp016da32A4u4GXRxkyywjQagkis1awYZ1D6Nuoncdv1FaKzhCAIEVKXkTXTGUUanD8Tn3lGqAaNMkfCnxxZMyAhhmESR5Z6SNvjWftWDoVP/ADVjbTTXnp2/8U8PKknsHBFquJEb8zVHx/xRZwyZncAlWyjmxA2ArDeK+NYvDXHto6BDLI6jM0+UFGmQrDMDtsVPOqnwnwz2znE4jO+UjJnJILaktruAYgbT6V2SzpRtEabdD+Ms4niTC5dm1ZJBtqQCx0jOQSIG+vfQHetHwrhaYdMiTEyTOpaAMxPXQdqeuuFl4JPzOmwA5VJwKXGUOyQSPdmYPSY9a4J5JS2yyikcLhWbfSpT2sqEDNtuAN9hEjU67VwbxuW1KOEZxKHytI7djpqKq8BjbqvlZy/mhgYkQYMEdD+VQlPi6ZeGFzTp/wANJbskARv1PP1ql414Qw+JDf4YtudRcQAEsfxD7w6z8CK0ODvK6htYPURsYqYLWlPFvtEXH0zyngng17F0tfg5CcmXVW/z+vblWwstFXnE8JnQgbjVf7huPiNKobReSAo0Xylti2vLpt9a2c3J7CMUiQ6JlZ32jf8A2gfGNBzo4XcYQIMFgNTMAqTPpIA+NRrKOfNdzEA6QJA3ggDb5c9al4a25WYUP5isicoJOXMJHIAHXepxk276L0oxae7L1FkafCm7eZV88HU6qDESYnpp1p3DA5RIjqOh6VIRg0gESPp6iunHP5OeUfgp+P8AAkxVoowWd1YiSp2zLtrBP0rxLivD3w917TqQyk7iAwkw46g719DZCJ1/4rzT7VsEGFrEIQQnkbr5hnU9xo2n+aqdkpR1Z5vNFcxRWEzggkgASSYA6k6AVtuF8LXD25YjORLsdh/lB6DX61lOFsRftx+Mf8/rW04hdRULuQQGAAadDI1gd45cqJtpUisEuxLFrNsZHX151c2MLlUdBuT/ADU1GwFokKdI3OnbSOlXNtJ3iOn6ya5ZS2dBH4fZS5DqdfMA43HIxOm4Hyq1u5UCtE5InQszAa8tzz0GtQ8NbCylpVULox3E7woqabBQZnuEdJCwfhH60jkiix2SsE/tEkBkB5HRh+1TisCoXCsV7UZwoABZZzKdVdl+6SPu7HUc+lTrixLEmANoEaaz1mt/ROXejO+JuCribLplyuGDoRAJYCNT3Er8qq3YJKBcoXSIAiABFaDDYpbod7TyYOVX2BUHWN4MifSswlwu8uZZ5PPqJ9NxTuT40IkrssMAgfXkOZ5RuaulHlgHLvuNSOU9Osd6rcNZBGUjQ6Ecql4bCBW090bSQYMnY9I0qNso0jm+jIkqpd9lyrovw6VC4XwhlOZ9Sd/jrBjnrWjt2vnz/nSpCWwRqPnS0m1Y8cjgml7Il/ArctshJAYEaROvwqThkyoFAMKI83QDr+tSLZXlqOo1GnWh0AnQa6n101+n0rojL0SbdES1j7bs1tHQukZ1nzKNNx6Gq4oJ051Y/wBGFIbVQikAaREQO/Ic6qMVYJ1LwAZEDlGxM66yeXTrKSq1TNVD9x8izBOwhRO53+FN8ODljOYFuRk5TAlYAgDbWdcwipSkqhO7RppudhTnDw7A59xoIB/CNTp72+2lYpVoGnVj+LxaWULvMCBoJJJMAD4mnsEiauo9+GO0nTTX0rm7cRUJeIA80xG8RrprP1rtEDIAMyaDSYK7HKSPloaaMvgHXGvY7YuqxYCfKYMgjUgHnvuKqPFPD7d7DurqDlR2U/hb2boGE7EZjr8eVWmHwwVSFJEzqTJnqSZk+tZ/xxxEWMJdIPmcezX+55B36LLfCrxkyUutnh8UUs0U5zi4Mj2qZhIzqD8TH616KuFDLDQwPJgCBPKIrzZLmV1eJysGj0M16eS2QZRJMaHkDEk0uVukWxb0SLNvSKsMPZmCdPj+opiytWGH1H6VySZdDeHuLhluOyF5csgWTLO2x00MmOlMtcvj/GuNm1C5ABADkKQs65tRrzirJ0VxlPPX4gyD86YtOzXQhtsERc2fTK7nQKBMnQk9BSO/R0RlGnZbYRVVdAACSdO+snTQnpUo7dT37elMq3UDtB178tOVRreMJORUaQSCTAgaw+5kGNOdUWznYxx3iKYa0994hBAE6sTso7kzpWXS4AFIUnMdI1idvhWW+0LxQMSy2betq2xOb8bgFcw/yiWA6yT0rrgHiEMEtu4RgAokaNEAQ06GOR510fZfG/ZLmkze2roEdt/29P2qwwbg7GY0mZ+fes3xPELasOxzaCM0wemn4iZA3qb4axyPbzhgWY6yADIEQRzP796SUEkCk7NRaM6cu/w+ddYlSUYAwSpiNCCQYM8vWmA4UExprsNeu3PnTKYr2lvPk3hkS4MjSIKhgZytIHLSpJbKNk/DKqiAAAdemp30rpliSNyOp5TGlVXE1uvaYWrotMPedlJAAEmDIy8jPamcR4gs28McR7RCMhKB2Ke0IUGFlczTIGinenUG+hb+SdfuMLaBipYxnKgqCQBOUEmBJ2k9Nar2xoGmhPQa8jptrtWJ4Z9ohe439SoVG9woCQm3lbcnrm/TbW4biVm5qjowPNSD+VbLG4vZilfQ77a5CuGnXVMu4YiNAMwI01OkEk9RJwvFkzpYdMrlQY1K7ZiEaIaI5xsekU0MWo5wBSi6hYNuRqPy/X60uika9l3aRQIA7a66DXnvvUn+df56VTYfFtJzMI+5pBAgTJk5tZ2A5DWJL74vIMzsFUDkCWPYKNT8K1LehW6JjOqJpCgCdBAA3+FeJ+MvEJxd7yk+xSRbXkSfeciN277D1NS/GfjZ8RNi0r2rQMPmlXfsw+6v+Xnz6VkXNdEYuPZCcr0hKKSaK2iZxcq88M+IPYMEcn2ZOh/Cf/j+VUpppxTtJ6Y8XR7CmKBIjUETINTRe21iPqT1ryDhfiC7h/KPOn4WO39p+79R2rUnjyXwMlt1jzANl5aTJbfX61zzwV/hZSsvOLY+6txSh8kgaDn0Pbv2q8s8RGUbTHzNYiwly4fNmVd/e1knbTf8tqtDbbRQCWP42yiJidN+sflU5QSVlubmlGjUXOLqq6uFMawMxH9qjU+sVluIca9upw9lmtoZDOYDMPvd1nWTv6VOtrkAzZdeQ0ipVvhVq4W/w0zEwzZRPIySBPTWsx18iTjKJgMR4Q8vkuaj8QEH4jas7j8C9lsjrB5Hke6nnXsl3AhDr9B8Kh8X4CmItMhAk6o34X5N+46V1RyNP8iLSZ5vhvFeIRcnlcRHnBPz11rX+BeM20RhfTI05lKqYIPLmZH61WcL4Etv3hL7MTrBG4HQVZ3btu0JKlmkAAA7nYfGlnJS1Ff0ZRrs1lrxHZOyv65CP+a7TjCOPPadiGJXKRpuA3mIIaCfnzrP8KvBozIFJ1gcv51q9Z8gGVMxJ2H7mpfafpjKSZ3ieI3WnJh0kag3GZxtvlEQeW9eb+PUxhvC5iCGQjLbKAqiiJKhSSVYxOpJMbkDT1jD25ExHamOMcKt37L27nusNxurD3XXuN6piXDsWTs8CAJ0AknYCrnAcCcEMWZDyg5TJ6EGeorUJ4cGHRHkNnkNA1DDkZ39e1TbOFzMPKCRtP6Vs8ruloIxS2zvAYfEhVBckciwmeW+523qxt8Kuk5/asJgbDL1GjTrrUn+nBtG1nkBgx3B9JBnX9q5N11KZoChjAIC6RzMwSOVScUt1YybYNw14yvdYzyBVZHfKB/BTy8OZNQJbkSSJ6Tv+tP4piyBsjGSAQFzabz1AkDahLzMCLLeZd0OoMbqJ2NLySlVD8G43ZW8Z8PpikyuuV1911Gqnv8AiXsfoa8z45wm7hnyXANZKsPdcDmPmNDXtK4oZUYIzB9JVdifxcxv8KrvFXABi7GQEK6nMjHk2xU9FP8ANq6k06ISgzxOitA3gvHAkewJjmGWPh5qSmonRSosk0tjCPdcInvNO+gAAkknpVlxbhjYe66EaA+Xusk/tUfgwU3dSQwVikfij9ppuNGLstRwS3bBHvkxmLQRprCj1qVg8MqkmNT/AD4bUjPCzBnl3ntVjgcLoCw5aiZ9ek/KoSftsvHossCgO0wDEmJ+lW2HcCQdttY+VVXDlcKRbVZI8ivICgGCIExuD8amcS4YLoyl7ij3hkOubvO/0pG9jRSfZCHCrly4fNCZtc3JFnb1itTYuFZKKAsak6bKFUjXWqDFi1hmLXb7lGMC2IgmBOeNW1E8hrtWq9kjpDLKmPiNCNvQVFKpNv8Ah0ZG3BJLXz8lGFyXWd3uXFKeVFUlNF90kaB5B6DUCrXDMrKCFIkbHl8tDT7YZCpUpoNNTy+fw1osYYDUMxB5FjEbiOkbaddaopI5XEy+IsD2zx+L8wDTeLweGRke6WLx7q+YLMyY5bnWpuPQi+8DQkf7Vmqq7h895ydVEaDXWByjepqfFlY43Ik+2ssQQTEiJUwPjt01q+wiKFAHwmeetVGGsSJCGOmgPxnb51Nwz+zKgrALAbSZIPT0+lCyycqaHeGKWnsu7APSusQnkPIweRJ07DU+gpywBr8v1p5zpMSegj8/5tVYzsg4mex3DVew+WSWGcE+UlgoyyIESBERtPOs+iwuTMczDcaATpGY6TO35VuGIOYHp+9ZUJsefKNpIIkjnvNZOSUjUmkOW8PkBdZJlRlGsmAoJkagfIZadfBrfQG4oEQRrP3gcuo5xXeDwrzuY56CCI1n5VY+zfyqRC6zA6cu3/NTcmzY6eiHxBybRWwzBtCSkSIMmAd/SOdM8IsCwpfIxI1MamYnzd+tW+HtrqVAHpFSQhGo376gfCsu2nfRRTpVRU+H7V1Uc3MozuzBdYVSSwExvqZ5d6tbVpwCzskROnIayxJOoiOWkHflyXyKzPsJPkUnTfRRJPoJNP4tXNs5R0A7rz0jQ9qqp8VXoWSbdkD+uPINHLTlyopVtPA1H0oqf5/sLj8GL8SYZMdhUxVnVssnrpoVPcaivOeHA+3Trm/IGaufAniT+muG1cP+DcMGdkY6ZvQ7GrXj/AhYxdu6n/27jbjYFgRH1EGvXyq1yX9OZKmC2izjTTn9KvLCbCol0hEZidEUkz2Ggp3A2mdbb5lzQJiSsNBYD5CDXmz2VjomNhXBRgZYNrA3UmDI6DQ+q1b2bX1riCBI3gx/BVfwrxClx8hDI3RhEnoNdDvpUdyH5JE2/wALw5dTcVMzHImaJJgt5e8BvkTV2JAEHmND06bbVX4UF3Z/MADlVHUCCpILqRrDAjnsPWrRBrykjX01j9aVxpUh+Tl2O7021vbXQGfl1rizbiTmYyZhiPLtoI6R1O5primKypkHvNp6LzPx2rehGiqxOIRQzsQJkrPPc6ddKo8C4ZAVaWcEkGd+/wATWgawrqAVkajX0g1WYDhiWmcoSZbWeUfd209aVRspGfFMXAYfEIBmYQPe0JLSNIgjL6kfKtNZsyNdY/n70mGAIH871LW0DGp0IJymNRy05dRTCDWGssGYakHXUkxsABOnI7bfGnEVwxDAZIEGZJJJkERsPLr37avoQ0gEHWD+RFdPbUrlI0007dKaMqZlFf8A0y21YgnXMRmZm3liBJMDtVFZHm8pEroeoOXTsOR1FW3HVSEzKGYNmSdcpAILDoYJHxNVy4pAFKjNnP3eewM68t/gaWTuVm3ZPwJYIoYktHmJ5tzMDTedtKcu2S5BZjpuBIAkax15anvRZFSEHIUjbZqObeFXLCkqNJC6fAin1JnbT+axyrtAKeRQa1GiKutNMoVnfMAgG5PlAAkk8hTzac4Hpt8TpXlX2k+Kw/8A6TDuCv8A+Zl2Y8rYPMDdo7DkRVsUHOSQknRmcd4wxrXHZLxCl2KgbBSSQB2iis/8aK9aiJHNbrwh4jR0/o8UZQ6I55dFJ/I1hqQ0J0B6vxG29qUcEg+46/fH6N+dTLAYKuXTbefd5x0MVlfCvi5cow2L8ybI53XsT+v8OoxmExFlc9hhibR1yOfMP7XGvzmubJgfcehuSqvZc4JyRLCP/Nc4vhqXRDDXkRuDyg1m8L4wsH/DuZ7DwR5xKgxoZ2j1jatBhsd7RAbBS4I95XUKSN9pIO9ccscl2jbRPsIylRmBUKQ0gli5yw0zAHvSI5iIin7WLQkr96BK6SBrv9frVJi8Y1vM1zEWbSicoIkzymWlvRQOVY3xB4ye5KYebakQzgQ7+nNBv37iiONyZvOKWza8e8QW8KEtoyG4YVEkwBoMzkTlAGw3J+JBh7rOczGWO/bb+fKvGtSxJJJOskySepPWtp4a8UBQVvHUDyttmge6SdM2g6TVJYkloWORt7NyxK6gE9liT8CalJZAkgRJ7a6Tp/OVV/C+Ii+gdVK9mEGRpHf1FWqICRKiRtMHUgiR8CR8ag9DtU6Y/hrWxOp7TGu/wqYqeaZ2A09J59P2qOl1VIUmCdh1ipaOJ7/WKyhk6ENwLy5wIB9NvnrtGtMcT4jaw9t71xgij3urGICgDVmMAR2qj8W+L7eCyLGe42uRTBVPxN06Drr0ryHjvHL2LcvdYxPkWfKo6KOvU7mq48Tlt9CSmlpGsX7QUuXWe7aKqdEKnMQoJgOvXuJ3rT8Lx9nEL/hOGAM+UwwMyZG4mvGSNBRbZlIZWKsNipKkehGtWlghLrQim0e+4oP7NghAcggE8vSOdVvhz2uZ85crpGcnQ6zE69O1eXYTxJjEXy4hz/eQ/wDvBq24b404g7BERLrHqhkjuVYAesVF+NJu0y0c64uNdnsKsP1p7DoSBoRGsA/melU3h/C4hLXtMY6oBLGYkDeC2gCgabctTWE8dfaCb4bDYNslnUPcEhn6heYXvuew3rDxG9yeibn8D32geNixbDYZ/KNLlxPkURvzYeg515rHagKOtAT1+VdsYRgqihW7F06D5ikpMvrRTmDFFFFYAhrSeGfF97CEKSXt/hO4Hadx2+orNmlihNroxqz2E4bA8UTMpVbnPkQehH71jOM+BsThyWRc666rvFZXD4h7bBkZlYbFTB9O47Vu+AfaTcSFxC512zKBPLdT8diPStajL9MzaMT7Aq0MuU9xFPMwr2K0/DeILoULc40Yeo0YfEVUcR+zNWlrNz4HWpywvtbMbTPNENctWkx3gfGWp8mcdV/aqLE8OvJ79t19Qai4NPYUd4Did+yZt3WTsDK/9LSv0q7wvjzGJ7xS5/esH5qQPpWZExXGascU+0bbNmftGxZPlSyo/tcn55x+VVuP8Z4245cXfZyIy2xAj/VJnvVAsxSKhOwJoUUn0byY7euM7F3cu7GWZiSSepJ1NMtVhY4RiLkBLTt6Ax86vOH/AGe467HkCDqxn6CmUWzH2ZMnSnMPaZyFRSxPJQSfkK9Y4V9k6LBxF0t/lHlH01+tXd7H8K4YuWUzj7ijM5PdR7vq0DvVFib7BtGI8PfZ5iL4U3B7JNzMFz+i/U962d6/w3g6QcrXSJCrDOx667DT3mIHesX4i+1HEXpXDr7BOTSDcP8A/K/CT3FYG6xZizEsxMksSzE9SSSSapGKXRpovFXjG/jmhmCWhqtpZK6bFzAzn5AchzrOfH6UoMdKJnkK17NOZ7miBvJ/nxpdegpDP4RQBxp1NFOa/wAFJQBHopBS1gCGlFFFABRFFFACqSCCNCNiNCPQ8q0HDPGuNsRlvZwOVwZv+7RvrVAKUCtTa6MaPTOH/ayRAvWJ7owP/awH+6r7D/aNw5x55SeTo35oGH1rxXLSFKbmzOKPd14zwe5qblj/AFMi/wC+K7Fvgzah8MfR7X/yrwQLXWT0+tZafoKPeiOCru+GH+u1+9DeIODWtRctf6POfkgNeDIkdK7CnrRa+Ao9tv8A2mcOtj/DR3P+S2R9bhWqHiX2u3iCLGHVehuPP/asR/1V5jkPf+fCgJH/ADNFm0i84r4wx+JkPiGCn7qEIvocsFh/cTVCqbCY/npXeQ8hNEEcv58aVts0QL3/ADoAHWuix6gfKkDxzH1rQEgdT8qAB1NJnPWui0/e/OgBAo70kDoTSr8fypSD3+dAHOX/ACn5n9qKWO31FFAEeiiisAKIoooAIpaKKACuxSCgUAKBSxSUoigBQKX40kiiR0oA6A70oI5muQ3alntQAoIokdDQJ6fSlGY8q0BNOhpP9NdeYfej40P3afSgDkIfw/z0oKnoKJHegkd/nQAuY9f58qTX8X1pZToaPL0NACFf81GVev0pRH4aTX8IoA506miusjdPpRQBHooorACloooAKBRRQB01AoooAWlFFFaAppKKKwBxa5znrRRQAE0lFFAC0qD8xRRQA6qCNqca2NNP5FFFaYdMg6c6jt+lLRWMEI1ANLRWmkf2h60UUUgH/9k=",
        ingredients: [<p>   <li>1 cup of semolina (rava)</li> 
        <li>1 cup of yogurt (curd)</li> 
        <li>1/4 cup of water</li> 
        <li>1/2 teaspoon of mustard seeds</li> 
        <li>A few curry leaves, chopped</li> 
        <li>1/2 teaspoon of baking soda (or Eno fruit salt)</li>
        <li>2 tablespoons of cooking oil</li>
        <li> Pinch of salt </li></p>],
        instructions: [<p> <li>Heat 2 tablespoons of oil in a pan.
          Add mustard seeds and cumin seeds. Let them splutter.
          Add chopped green chilies, grated ginger, and curry leaves. Sauté for a minute.</li>
                              <li>Add semolina (rava) and roast it on low heat for about 5-7 minutes or until it turns light brown. Keep stirring to prevent burning.
          Remove the roasted semolina from the heat and let it cool. </li>
                              <li>Once the roasted semolina has cooled down, add yogurt (curd) and mix well,
          Add water and mix to form a smooth batter.</li>
                              <li>Grease the idly molds or a plate with oil.
          Pour the batter into the molds or onto the plate.</li>
                              <li>Steam the idlies in a steamer for about 10-15 minutes or until a toothpick inserted into the idly comes out clean.</li></p>],
        Cooking_Time: [<p>Keep it in a Idly maker for 15 to 20 min untill it has been cooked  in the steam .</p>],
        Nutritional_Value: [<p> <li>Calories: 150-200 calories per serving 2 idlies</li>
        <li>Fat: 5-7 grams</li>
        <li>Carbohydrates: 20-25 grams</li>
        <li>Protein: 5-7 grams</li>
        <li>Fiber: 2-3 grams</li></p>],
      },
      {
        title: "Chocolate Truffle",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQztVLWnVVijsYLgNtVKIWfEHbAB3QWtSkS0yxu0RQeglmwWmwFavgrgow_udszpyER0&usqp=CAU",
        ingredients: [<p> <li>1 sheet of frozen puff pastry (thawed)</li> 
        <li>1/4 cup of chocolate chips or chopped chocolate</li> 
        <li>1 egg (for egg wash)</li> 
        <li>Powdered sugar (for dusting, optional)</li> </p>],
        instructions: [<p> <li>Preheat your oven to 375°F (190°C).</li>
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
    </p>],
        Cooking_Time: [<p> <li> Pre-heat  the oven for 15 min</li>
        <li>Place the cake to be baked in the oven for another 16  minutes </li></p>],
        Nutritional_Value: [<p>  <li>Calories: 250-300 calories per pastry</li>
        <li>Fat: 15-20 grams</li>
        <li>Carbohydrates: 25-30 grams</li>
        <li>Protein: 3-5 grams</li>
        <li>Fiber: 2-3 grams</li></p>],
      },
      {
        title: "Mango Pastry",
        imageUrl: "https://tiimg.tistatic.com/fp/1/007/582/hygienically-prepared-mouthwatering-sweet-taste-mango-birthday-cake-657.jpg" ,
        ingredients: [ <p> <li>1 sheet of frozen puff pastry (thawed)</li> 
        <li>1/4 cup of chocolate chips or chopped chocolate</li> 
        <li>1 egg (for egg wash)</li> 
        <li>Powdered sugar (for dusting, optional)</li> </p>
        ],
        instructions: [<p>  <li>Preheat your oven to 375°F (190°C).</li>
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
Once cooled, you can dust them with powdered sugar if desired.</li></p>]  ,  
         Cooking_Time: [<p> <li> Pre-heat  the oven for 15 min</li>
         <li>Place the cake to be baked in the oven for another 16  minutes </li></p>],
        Nutritional_Value: [<p>  <li>Calories: 250-300 calories per pastry</li>
        <li>Fat: 15-20 grams</li>
        <li>Carbohydrates: 25-30 grams</li>
        <li>Protein: 3-5 grams</li>
        <li>Fiber: 2-3 grams</li></p>],
      },
      {
        title: "Samosa ",
        imageUrl: "data:image/jpeg;base64,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",
        ingredients: [<p>  <li> 2 cups all-purpose flour , 
          1/4 cup vegetable oil or ghee (clarified butter)</li>
          <li> 1/2 teaspoon salt and 
Water, as needed</li>
<li> 2 large potatoes, boiled, peeled, and diced into small cubes and 
1 cup green peas, frozen or fresh and 
1 small onion, finely chopped</li>
<li> 2-3 green chilies, finely chopped (adjust to your spice preference) and 
1 teaspoon cumin seeds and 
1 teaspoon coriander seeds and  crushed
1/2 teaspoon turmeric powde</li> <li> 1/2 teaspoon garam masala and 
1/2 teaspoon ground cumin and 
1/2 teaspoon ground coriander</li>
<li> Salt to taste
Vegetable oil for frying
</li></p>],
        instructions: [<p><li> In a mixing bowl, combine the all-purpose flour, salt, and vegetable oil (or ghee).
          Gradually add water and knead the mixture into a stiff dough. Cover it with a damp cloth and let it rest for 30 minutes.</li>
          <li> Heat a couple of tablespoons of vegetable oil in a pan over medium heat and 
Add cumin seeds and let them splutter.</li>
<li> Add chopped onions and green chilies. Sauté until the onions become translucent.
Add the boiled and diced potatoes, green peas, and all the spices</li>
<li> Stir well to combine and cook for about 5-7 minutes, until the filling is heated through and the flavors meld together. Remove from heat and let it cool.</li>
<li> Divide the rested dough into equal-sized balls, about 10-12 and 
Roll each ball into a thin oval or circle, around 6-7 inches in diameter.</li>
<li> Cut each circle in half to create two semi-circles and 
Take one semi-circle and fold it in half to create a cone shape. Seal the edge by pinching it together.</li>
<li> Fill the cone with the prepared potato and pea filling.
Seal the open edge by pinching it together, creating a triangular samosa shape. Ensure it's sealed tightly to prevent filling leakage during frying.
Repeat this process for all the samosas.</li>
<li>Heat vegetable oil in a deep frying pan over medium heat.
Once the oil is hot, gently slide in the samosas, a few at a time.</li>
<li> Fry until they turn golden brown and crispy on all sides. This should take about 4-5 minutes per batch.
Remove the fried samosas and place them on paper towels to drain excess oil.</li></p>],
        Cooking_Time: [<p> The cooking time for frying samosas is approximately 4-5 minutes per batch.</p>],
        Nutritional_Value: [<p> <li> Calories: 220-250 kcal</li>
        <li> Protein: 4-5g</li>
        <li>Carbohydrates: 30-35g</li> 
        <li> Fat: 9-12g</li>
<li> Fiber: 3-4g</li></p>],
      },
     
     
  ];

  return (
    <div className="fullpg vh-100">
      <div>
        <div className="d-flex justify-content-center mt-2">
          <Carousel className="caros">
            <Carousel.Item className='car1 text-center'>
              <img src={ca1} alt='' className='imgcar' />
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                <h5>Roti,Paneer Butter masala</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
              <img src={ca2} alt='' className='imgcar' />
              <br/><br/><br/>
              <Carousel.Caption className='car1 text-center'>
                <h5>PIZZA</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <img src={ca3} alt='' className='imgcar' />
              <br/>
              <Carousel.Caption className='car1 text-center'>
                <h5>VADA SAMBAR</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="txt1 text-center">
          Some Top Pick Recipes in and around Mangalore !!
        </h2>
        <br />
      </div>
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

export default Home;
