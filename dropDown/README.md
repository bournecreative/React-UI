# React Search Component

Search Component accepts input and makes API request to Wikipedia API. Results are displayed below input field.

## Details

useEffect hook is used to decouple input onChange handler from making API request. Rather, once component rerenders, useEffect detects state change and makes API request. This design pattern ensures the API request is not instantly made when the search term updates. We also have some flexibility to trigger a search when another parameter might change. Ultimately, this method makes it easier to extract this functionality into a reusable function.
