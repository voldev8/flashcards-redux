# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – Users can create topics
- `/topics` – Users can view all topics, Users can click on an individual topic and be redirected to the page for that topic
- `/topics/:topicId` – Users can view an individual topic and all quizzes for that topic, Users can click on a quiz associated with a topic and be redirected to that quiz’s page
- `/quizzes/new` – Users can create quizzes that are associated with topics and contain lists of flashcards, Users can add and remove card fields in the new quiz form
- `/quizzes` – Users can view all quizzes, Users can click on an individual quiz and be redirected to that quiz’s page
- `/quizzes/:quizId` – Users can view an individual quiz and flip cards over


# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
