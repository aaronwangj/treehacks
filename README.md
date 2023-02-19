## Inspiration
#### The Creator Economy is Booming
The creator economy is estimated to be worth $104.2 billion and has grown to over 165 million people globally in the last two years - an increase of 119%. This growth is in large part fueled by younger generations, as 29% of American children want to become a Youtuber/Vlogger when they grow up: more and more, content creators are becoming role models, and educational content from content creators are highly sought after.
And content creators want to create educational content for their audience. Over 60% of digital creators prefer identifying as creator educators than creators who solely provide entertainment to their audience. Creators are financially incentivized to find more paths to monetize their content; on average, creators have three distinct income streams.

#### Developing educational content is hard
Developing educational content online is expensive and time-consuming. On average, online courses cost $10,000 to develop each hour of educational content, and it takes an estimated 80 to 280 hours required to develop an online course. This effectively prices out small and medium-sized content creators who don’t have the capital to create educational content but still rely more on diversified content monetization. Another pain point for content creators in developing online courses is the time required to create educational materials, assignments, and study notes. Again, this particularly affects small and medium-sized content creators who do not have access to large-scale production companies and outsourcing capabilities.

## What it does
Socrata is an online course creation platform for small and medium educational content creators who want to monetize their knowledge. With the power of generative AI, creators can focus on sharing their knowledge while delegating the hassles of running a course to your AI teaching assistant, AITA.
Content creators simply upload their own educational videos on a particular topic they wish to teach, and Socrata handles the administrative tasks of running an online course: writing detailed lesson notes, creating thoughtful homeworks and quizzes, grading student assignments, and more. Streamline all the hassle of building and managing a thriving online course and coaching business with Socrata!

## How we built it
Our application consists of two main components. The first is a React with tailwind.css frontend that provides content creators with the opportunity to easily create and manage their own courses. Furthermore they can also provide feedback and alterations on the outputs of our generative models so that they can still have complete control over their brand and content. We use this feedback to improve our models to further streamline the course creation process. From our online interface, creators can start to communicate with their students and further build a community.

The next component is the backend. Specifically we use a Flask server to connect our frontend to our machine learning models. We utilize OpenAI’s davinci-001 and davinci-003 models for autonomous content generation. We also use a self-hosted Facebook AI LibriSpeech model (from HuggingFace) to seamlessly generate a transcription for a video file. Finally we utilize Convex’s backend as a service platform to store, display, and manage our data.

Designing and prototyping was done using Figma.

<img src="https://i.imgur.com/bgUI95J.png" />

## Challenges we ran into
One challenge we encountered early on was addressing the different encodings and file types users could upload. Making our platform compatible with many different video formats was key to our goal of making our platform accessible to all.
It was the first time using audio input and had to experiment to find the best model for audio transcription.
We also faced challenges when submitting a large quantity of tokens to OpenAI’s APIs and had to figure out ways of making the inputs more concise and optimized.
Another challenge we faced was that our compute-resources were limited. Thus generating content took more time than expected. We resolved this bottleneck by parallelizing some of the model function calls.
Connecting all the many moving pieces together was a daunting task. Specifically we needed to connect our frontend with both the Convex backend as well as the ML models on Python. We were able to overcome this by making a spreadsheet and using it to delegate tasks. We also consulted each other for help whenever we got stuck. This helped us speed up the process and deal with any bugs that came up in a quick and effective way.

## Accomplishments that we're proud of
* We were able to connect together so many different technologies in order to provide people with the ability to create their own online course.
* We added a refresh button so that if creators didn’t like the AI generated, they can regenerate different content.
* We were able to automatically generate study guides, quizzes, and transcriptions just from inputting a video file.
* Overall we set out with the daunting goal of creating a platform with a variety of AI-powered features to streamline course creation. We were able to meet that goal while meeting cool people, attending fun events, and generally having a lot.

## What we learned
* Since this was the first time any of us attended a formal college hackathon, one thing we learned was how to work efficiently under a time constraint. 
* We also learned how to leverage generative AI models in order to create a working application.
* We explored many different technologies during the development cycle and learned a lot about how to use them to build a full stack application.

## What's next for Socrata
From short-term to long-term stretch goals:
* We want to speak with more influencers to better understand what other struggles they face with building educational content for their following to guide how the technologies we build can alleviate their issues.
* We want to build many more features that incorporate content creator feedback to give them more control over the content and to improve our models.
* More community features to help content creators improve their brand and community
* Build further integrations on the platform (i.e. translation, recommendation)
* We want to build a chat feature where users can ask questions on course material to AITA, called Office Hours.
* We want to integrate payment processing onto our platform using Stripe. 
* We want to explore the possibility of this technology to be used for remote lectures at universities and companies. We believe this could be a valuable use case as a B2B SaaS.
* We want to test different go-to-market strategies to better understand our best avenue for customer acquisition, which will help us find product-market fit.


