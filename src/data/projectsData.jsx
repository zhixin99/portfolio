import React from "react"

export const projectsData = [
    {
        projectId: "dutch-supermarket-comparison",
        src: "/img/dutch-supermarket-comparison.png",
        alt: "Home page of the dutch supermarket comparison website.",
        liveLink: "https://compare-dutch-supermarkets.netlify.app/",
        codeLink: "https://github.com/zhixin99/dutch-supermarket-comparison",
        date: "Apr 30, 2026", 
        timestamp: "2026-04-30",
        header: "Dutch Supermarket Comparison", 
        description: "A full-stack system designed to compare prices for 40,000+ products across major Dutch retailers. I architected the entire lifecycle from building a multi-threaded Python data pipeline and a normalized Supabase schema to designing a high-performance React frontend.",
        tags: [
            { name: "Python", type: "js" },
            { name: "Web Scraping", type: "python" },
            { name: "FastAPI", type: "api" },
            { name: "Supabase/PostgreSQL", type: "db" },
            { name: "Render Deployment", type: "devops" },
            { name: "Search & Filtering Logic", type: "js" },
            { name: "React", type: "js" },
    
        ],
        contentBlocks: [
            { 
                type: 'h2', 
                text: 'The Background' 
            },
            { 
                type: 'p', 
                text: <>The project came from a personal pain point while living in the Netherlands — groceries can be expensive, and prices often vary a lot between stores.</>
            },
            { 
                type: 'p', 
                text: <>There are three supermarkets near my home: <span className="blog__text-highlight">Albert Heijn</span>, <span className="blog__text-highlight">Dirk</span>, and <span className="blog__text-highlight">Hoogvliet</span>. I decided to build a tool that helps me compare prices across these stores in real-time, making shopping decisions faster.</>
            },

            { 
                type: 'h2', 
                text: 'Project Overview' 
            },

            { 
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Github</span>: Run the backend python code for web scrapping, data cleaning, and automatic refresh workflows</>,
                    <><span className="blog__text-bold">Supabase</span>: Store the scrapped data</>,
                    <><span className="blog__text-bold">Github Actions</span>: Schedule the data refresh every other day</>,
                    <><span className="blog__text-bold">HuggingFace Space</span>: Host the SentenceTransformer model (to convert text into embedding)</>,
                    <><span className="blog__text-bold">Render</span>: Deploy backend API (call the Supabase to get the data, call the HuggingFace Space to run the model, and calculate the similarity between the query and the existing data, and return the search result)</>,
                    <><span className="blog__text-bold">React + Vite</span>: Build the frontend user interface</>,
                    <><span className="blog__text-bold">Netlify</span>: Deploy the website</>
                ]
            },
            { 
                type: 'h2', 
                text: 'Tech Details' 
            },

            { 
                type: 'h3', 
                text: '1. Data Scraping' 
            },

            { 
                type: 'list-summary', 
                text: <>Before execution, I first identified all the necessary metrics I needed to collect:</>
            },

            {
                type: 'list',
                items: [
                    <>url</>,
                    <>image</>,
                    <>brand</>,
                    <>product_name</>,
                    <>unit</>,
                    <>regular_price</>,
                    <>current_price</>,
                    <>valid_from</>,
                    <>valid_to</>
                ]
            },
            { 
                type: 'p', 
                text: <>I started with the traditional <span className="blog__text-highlight">BFS</span> (Breadth-First Search) scraping approach. This involved scraping the main category page to collect all product and subcategory URLs, then visiting each of those links to gather even more URLs. I repeated this process until no new URLs were left to crawl. While this method was effective, it was extremely slow; it could take hours just to collect raw data from a single supermarket.</>
            },
            { 
                type: 'p', 
                text: <>After further research, I discovered a better solution. Instead of crawling page by page, I could access the same <span className="blog__text-highlight">internal APIs</span> that the supermarkets use to power their own websites. This transition significantly reduced the time required for data collection. Here is a detailed breakdown of the APIs I discovered.</>
            },
            { 
                type: 'h4', 
                text: 'Hoogvliet' 
            },

            { 
                type: 'p', 
                text: <>By inspecting network requests in the browser, I discovered that Hoogvliet separates product discovery and pricing into two distinct systems: <span className="blog__text-highlight">Tweakwise</span> for search and categorization, and <span className="blog__text-highlight">Intershop</span> for authoritative product and pricing data.</>
            },

            { 
                type: 'h5', 
                text: 'Tweakwise API' 
            },

            { 
                type: 'p', 
                text: <>The Tweakwise API is triggered every time a user <span className="blog__text-highlight">enters a category or paginates through a product list</span>. This is the primary data source for category listings. By calling the API and iterating through all pages of each category, I can obtain the product SKUs, URL, title, and unit. However, I found that Tweakwise does not provide <span className="blog__text-grey-background">promotion details</span>, such as discounted prices or promotion periods.</>
            },
            {
                type: 'image',
                src: '/img/dutch-supermarket-comparison/tweakwise-api-headers.png',
                alt: 'Tweakwise API request in chrome DevTools',
            },
            { 
                type: 'h5', 
                text: 'Intershop API' 
            },
            { 
                type: 'p', 
                text: <>This API is triggered whenever <span className="blog__text-highlight">a product detail page is loaded</span>. By using the <span className="blog__text-grey-background">SKUs</span> collected from the Tweakwise API, I could fetch specific product details like <span className="blog__text-grey-background">current_price</span> and <span className="blog__text-grey-background">regular_price</span>. However, even this API lacked the promotion period (<span className="blog__text-grey-background">valid_from</span> and <span className="blog__text-grey-background">valid_to</span>).</>
            },
            {
                type: 'image',
                src: '/img/dutch-supermarket-comparison/intershop-api-response.png',
                alt: 'Intershop API request in chrome DevTools',
            },
            { 
                type: 'h5', 
                text: 'HTML Parsing' 
            },
            { 
                type: 'p', 
                text: <>To bridge the gap and obtain the promotion dates, I resorted to HTML parsing via <span className="blog__text-grey-background">BeautifulSoup</span>. By targeting the <span className="blog__text-grey-background">pdp-date-range</span> class on the product page, I was able to extract the specific start and end dates for each discount.</>
            },
            {
                type: 'image',
                src: '/img/dutch-supermarket-comparison/hoogvliet-html-code.png',
                alt: 'Hoogvliet HTML code for the promotion period',
            },
            { 
                type: 'h4', 
                text: 'Dirk' 
            },
            { 
                type: 'p', 
                text: <>Dirk uses one single endpoint for almost all data: <span className="blog__text-grey-background">https://web-gateway.dirk.nl/graphql</span>. My approach involves navigating to each category and inspecting the <span className="blog__text-highlight">GraphQL</span> payload to find the <span className="blog__text-grey-background">listWebGroupProducts(webGroupId:)</span> query. By iterating through each group, I can retrieve data for all products. However, a notable limitation of the <span className="blog__text-grey-background">GraphQL</span> response is that it does not provide the <span className="blog__text-highlight">product URL</span>.</>
            },
            {
                type: 'image',
                src: '/img/dutch-supermarket-comparison/graphql.png',
                alt: 'GraphQL API request in chrome DevTools',
            },
            { 
                type: 'p', 
                text: <>Previously, I parsed the sitemap at <span className="blog__text-grey-background">https://www.dirk.nl/products-sitemap.xml</span> to map these products to their respective URLs. Unfortunately, this sitemap has recently been blocked. While I managed to use it in the past to secure URLs for most existing items, I can no longer retrieve URLs for newly added products using this method.</>
            },
        { 
            type: 'h4', 
            text: 'Albert Heijn (AH)' 
        },

        { 
            type: 'p', 
            text: <>For Albert Heijn (AH), I leveraged community knowledge from repositories like <a href="https://gist.github.com/jabbink/8bfa44bdfc535d696b340c46d228fdd1" target="_blank" ariaLabel="to the github repo jabbink" className="blog__anchor">jabbink</a> and <a href="https://github.com/gwillem/appie-go/tree/main" target="_blank" ariaLabel="to the github repo appie-go" className="blog__anchor">appie-go</a>.</>
        },

        { 
            type: 'list-summary', 
            text: <>I used a BFS traversal to map out the supermarket's structure:</>
        },

        {
            type: 'list',
            items: [
                <>Retrieve the IDs for all top-level categories.</>,
                <>Fetch the IDs for all sub-categories under those headers.</>,
                <>Continue until I have a comprehensive list of all <span className="blog__text-grey-background">taxonomy IDs</span>.</>
            ]
        },

        { 
            type: 'p', 
            text: <>Once the taxonomy list is complete, I loop through each ID and use the <span className="blog__text-highlight">search API</span> to extract product information page by page. The search API is also from the <a href="https://gist.github.com/jabbink/8bfa44bdfc535d696b340c46d228fdd1" target="_blank" ariaLabel="to the github repo jabbink" className="blog__anchor">jabbink</a> repo.</>
        },
        { 
            type: 'h3', 
            text: '2. Data Processing' 
        },

        { 
            type: 'p', 
            text: <>Once the raw data was stored in <span className="blog__text-highlight">Supabase</span>, I began the data processing phase to ensure consistency and searchability across the different supermarket datasets.</>
        },

        { 
            type: 'h4', 
            text: 'Translation' 
        },

        { 
            type: 'list-summary', 
            text: <>To make the application more accessible, I automated the translation of product information:</>
        },

        {
            type: 'list',
            items: [
                <><span className="blog__text-bold">Fetch:</span> Retrieve all records from Supabase where the <span className="blog__text-grey-background">product_name_en</span> field is <span className="blog__text-grey-background">NULL</span>.</>,
                <><span className="blog__text-bold">Translate:</span> Use the <span className="blog__text-grey-background">GoogleTranslator</span> library to convert the Dutch product names into English.</>,
                <><span className="blog__text-bold">Update:</span> Batch-update the Supabase table with the newly generated translations.</>
            ]
        },

        { 
            type: 'h4', 
            text: 'Unit Normalization' 
        },

        { 
            type: 'list-summary', 
            text: <>Supermarkets use varied formats for units (e.g., <span className="blog__text-grey-background">5-pack</span> vs <span className="blog__text-grey-background">per stuk</span>), which makes price comparison difficult. I implemented a normalization pipeline to standardize these values. This allows for more precise <span className="blog__text-highlight">price per unit</span> calculations across different brands.</>
        },
        {
            type: 'list',
            items: [
                <><span className="blog__text-bold">Targeting:</span> Fetch data where <span className="blog__text-grey-background">unit_qty</span> or <span className="blog__text-grey-background">unit_type_du</span> is <span className="blog__text-grey-background">NULL</span>.</>,
                <><span className="blog__text-bold">Standardization:</span> Transform the raw <span className="blog__text-grey-background">unit_du</span> string into a normalized format: <span className="blog__text-grey-background">[unit_qty] + [unit_type]</span>, where unit_qty is a numeric value, and unit_type is mapped to a set of standard values: <span className="blog__text-grey-background"> "l", "stuk", "kg"</span></>,
                <><span className="blog__text-bold">Storage:</span> I created a utility function to split the normalized string into distinct <span className="blog__text-grey-background">unit_qty</span> and <span className="blog__text-grey-background">unit_type_du</span> columns, then updated the Supabase records.</>,
            ]
        },
        { 
            type: 'h3', 
            text: '3. Data Refreshing' 
        },

        { 
            type: 'p', 
            text: <>To ensure the data remains current, I implemented an automated refresh flow. The code is hosted in a <span className="blog__text-highlight">GitHub</span> repository and triggered via <span className="blog__text-highlight">GitHub Actions</span> scheduled workflows, which push updates directly to <span className="blog__text-highlight">Supabase</span>.</>
        },

        { 
            type: 'h4', 
            text: 'Update Logic' 
        },

        { 
            type: 'list-summary', 
            text: <>The system compares the existing dataset (<span className="blog__text-grey-background">old_skus</span>) with the fresh API data (<span className="blog__text-grey-background">new_skus</span>) and categorizes products into three groups:</>
        },

        {
            type: 'list',
            items: [
                <><span className="blog__text-bold">Mark Unavailable:</span> Products in the old data but missing from the new API (<span className="blog__text-grey-background">old_skus - new_skus</span>) are marked as <span className="blog__text-grey-background">availability = false</span>.</>,
                <><span className="blog__text-bold">Insert New:</span> Products not found in the old data (<span className="blog__text-grey-background">new_skus - old_skus</span>) are fully inserted. Supabase performs a silent update (<span className="blog__text-highlight">upsert</span>) if a product was previously in the database but marked as unavailable.</>,
                <><span className="blog__text-bold">Update Existing:</span> For products appearing in both sets (<span className="blog__text-grey-background">old_skus ∩ new_skus</span>), the system updates the price and promotion details if they have changed.</>
            ]
        },

        { 
            type: 'p', 
            text: <>Following the update, the system runs the data processing pipeline (translation and unit normalization) and generates vector embeddings for the new product names.</>
        },

        { 
            type: 'h3', 
            text: '4. The Search System' 
        },
        { 
            type: 'list-summary', 
            text: <>The search architecture is designed to balance speed with semantic accuracy. When a user enters a query (e.g., melk), the following flow occurs:</>
        },

        {
            type: 'list',
            items: [
                <><span className="blog__text-bold">Request:</span> Render receives the query and search language.</>,
                <><span className="blog__text-bold">Initial Filtering:</span> Render calls a <span className="blog__text-highlight">Remote Procedure Call</span> (RPC) function in Supabase to perform an initial filter using <span className="blog__text-highlight">Full-Text Search</span> (FTS) and an <span className="blog__text-highlight">ILIKE</span> fallback.</>,
                <><span className="blog__text-bold">Embedding:</span> Render sends the query to a <span className="blog__text-highlight">SentenceTransformer</span> model hosted on Hugging Face to generate a vector embedding.</>,
                <><span className="blog__text-bold">Similarity Ranking:</span> Render compares the query embedding against the top 50 products' embeddings from Supabase to calculate cosine similarity.</>,
                <><span className="blog__text-bold">Response:</span> The re-ranked, semantically relevant results are passed back to the frontend.</>
            ]
        },

    { 
        type: 'h4', 
        text: 'Why use an ILIKE fallback?' 
    },

    { 
        type: 'p', 
        text: <>Standard FTS breaks strings into <span className="blog__text-grey-background">lexemes </span>(root forms). While fast, it struggles with Dutch compound words. For example, a search for <span className="blog__text-grey-background">varken</span> (pork) would not return <span className="blog__text-grey-background">varkenslappen</span> because their lexemes differ. By implementing an <span className="blog__text-highlight">ILIKE</span> substring match as a fallback, I ensured that these compound words are still captured when exact token-based results are insufficient.</>
    },
    { 
        type: 'h3', 
        text: '5. Frontend & Accessibility' 
    },

    { 
        type: 'list-summary', 
        text: <>The website was built with <span className="blog__text-highlight">React</span> to handle states, such as multi-supermarket selections and language toggles. For the <span className="blog__text-highlight">accessibility (A11y)</span>, I implemented these:</>
    },
    {
        type: 'list',
        items: [
            <><span className="blog__text-bold">Grouping:</span> Used <span className="blog__text-grey-background">&lt;fieldset&gt;</span> and <span className="blog__text-grey-background">&lt;legend&gt;</span> for semantic filter groups.</>,
            <><span className="blog__text-bold">Price Context:</span> Added <span className="blog__text-grey-background">sr-only</span> labels to distinguish between "Original Price" and "Sale Price" for screen readers.</>,
            <><span className="blog__text-bold">Dynamic Feedback:</span> Implemented <span className="blog__text-grey-background">aria-live</span> regions to announce loading states and search results.</>,
        ]
    },

    { 
        type: 'h2', 
        text: 'Limitations & Future Improvements' 
    },

    {
        type: 'list',
        items: [
            <><span className="blog__text-bold">Basket-Based Comparison:</span> Currently, users compare products individually. I plan to introduce a shopping basket feature where users can input an entire list and see the total estimated cost for each supermarket.</>,
            <><span className="blog__text-bold">AI-Powered Matching:</span> While the current system is robust, moving to a full AI-driven similarity model for all queries could further improve accuracy. This feature has not yet been implemented due to API cost considerations.</>,
            <><span className="blog__text-bold">Hosting Reliability:</span> Because the Hugging Face Inference API enters a sleep state after 48 hours of inactivity, I am looking into ways to automate wake-up requests to ensure the search functionality is always ready.</>
        ]
    },
        ]
}, 
    {
        projectId: "interactive-textbook-reader",
        src: "/img/interactive-english-textbook-reader.png",
        alt: "Home page of the textbook interactive reader application.",
        liveLink: "https://interactive-textbook-reader.netlify.app/",
        codeLink: "https://github.com/zhixin99/interactive-textbook-reader",
        date: "Mar 21, 2026", 
        timestamp: "2026-03-21",
        header: "English Textbook Reader", 
        description: "It is built with React and Firebase, and features a system that allows students to click any part of a page for instant translation and audio pronunciation.",
        tags: [
            { name: "React Context API", type: "js" },
            { name: "Firebase Auth & Firestore", type: "api" },
            { name: "Web Speech API", type: "api" },
            { name: "Coordinate Mapping", type: "js" },
            { name: "Dynamic Routing", type: "js" },
        ],
        contentBlocks: [
            { 
                type: 'p', 
                text: <>This is my first solo project and I am excited to share my learnings and thoughts with you in this article.</>
            },
            { 
                type: 'h2', 
                text: 'The Background' 
            },
            { 
                type: 'p', 
                text: "My mom is a primary school English teacher in China. She has always wanted an all-in-one platform where her students could preview lessons, hear native pronunciation, and practice dictation for key vocabulary. To help her and her students, I decided to build this platform from scratch."
            },
            { 
                type: 'h2', 
                text: 'The Tech Stack' 
            },
            { 
                type: 'h3', 
                text: '1. React & Functional Architecture' 
            },
            { 
                type: 'list-summary', 
                text: <>The frontend is built with <span className="blog__text-highlight">React</span>, utilizing a component-based architecture to keep the code organized and reusable.</>
            },          
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Secure Routing with Layout Guards:</span> I implemented a PaymentGuard using a <span className="blog__text-grey-background">Layout Wrapper</span> pattern. It ensures that only logged-in and authorized users can access core learning materials. If a user isn't authenticated or hasn't activated their account, they are automatically redirected to the sign-up or activation page. </>, 
                    <><span className="blog__text-bold">Linking with Dynamic Routing:</span> Using <span className="blog__text-grey-background">react-router-dom</span>, I created a deep-linking system that maps the application's state directly to the URL. By using dynamic parameters <span className="blog__text-grey-background">(/:grade/:semester/:unit)</span> and <span className="blog__text-grey-background">useParams()</span> hook, users can easily jump between different lessons.</>, 
                    <><span className="blog__text-bold">Managing page indices with hooks:</span> I used the <span className="blog__text-grey-background">useState</span> and <span className="blog__text-grey-background">useEffect</span> hooks to handle the textbook navigation. For example, <span className="blog__text-grey-background">currentPageIndex</span> is the source of truth for what the user is currently seeing. When this state changes, the entire UI (the image, the sentence hotspots, and the progress bar) updates instantly. I also used <span className="blog__text-grey-background">useEffect</span> to watch the unit variable. Whenever the unit changes, the hook resets the page index to 0 so the user always starts from the beginning of a new lesson. </>]
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/routing.png',
                alt: 'The grade selector and the unit selector',
            },
            { 
                type: 'h3', 
                text: '2. Cloud Backend & Real-Time Data Persistence' 
            },  
            { 
                type: 'list-summary', 
                text: "To store user's data and provide a seamless experience across devices, I integrated Firebase."
            },            
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Secure Authentication & User Architecture:</span> I implemented <span className="blog__text-highlight">Firebase Authentication</span> to manage user identities securely. Upon sign-up, a corresponding document is automatically created in a Firestore <span className="blog__text-grey-background">users</span> collection. I also created a <span className="blog__text-grey-background">activation_codes</span> collection to store valid keys. This acts as a gatekeeper, granting access to curriculum only after a valid code is verified against the database.</>, 
                ] 
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/log.png',
                alt: 'The sign-up and activation page of the app.',
            },
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Intelligent Progress & Error Tracking:</span> To create a personalized learning loop, the system tracks the student performance in real-time. This data includes last studied timestamp, current grade/semester/unit, mistakes, and completed units. </>, 
                ] 
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/dashboard.png',
                alt: 'The dashboard, learn and mistake page of the app.',
            },
            { 
                type: 'h3', 
                text: '3. The "Hotmap" Engine' 
            },  
            { 
                type: 'p', 
                text: <>One of the most interactive features is the custom Hotmap Layer. By mapping coordinate data onto textbook images and using a custom <span className="blog__text-grey-background">speak()</span> utility built with the <span className="blog__text-highlight">Web Speech API</span>, I created a "point-and-speak" feature which allows the student to click directly on any sentence in the textbook to hear it read aloud instantly.</>
            }, 
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/learn.png',
                alt: 'The learning mode of the app, including the textbook reader, the vocabulary mode, and the dication mode',
            },
            { 
                type: 'h2', 
                text: 'My Takeaways' 
            },
            { 
                type: 'h3', 
                text: '1.Plan the Architecture Before Coding' 
            },
            { 
                type: 'p', 
                text: <>I realized that mapping out the entire user flow and listing the main features is essential. By deciding exactly what I wanted to achieve first, I saved myself hours of back-and-forth later. I also realized that having a draft UI design is quite important for an easier css design.</>
            }, 
            { 
                type: 'h3', 
                text: '2. Build the Code Skeleton First' 
            },
            { 
                type: 'p', 
                text: <>It is quite overwhelming to work on a large project, so I learned to prioritize the core structure. Instead of getting lost in small details, I focused on creating the main <span className="blog__text-highlight">page components</span> and ensuring the <span className="blog__text-highlight">routing</span> worked first. Once the foundation was solid, I could focus on the smaller, more complex components later.</>
            }, 
        ]
    }, 


]