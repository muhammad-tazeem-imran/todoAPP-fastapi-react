# todoAPP-fastapi-react

Currently the app works normally, without the docker.
Docker work is half baked as of now, I could not find the time to finish it.

Rest should work as expected

Switch to server folder and run this to perform all the migrations
`alembic upgrade head`

Run this command to start server
`uvicorn main:app --host 0.0.0.0 --port 8000 --reload`

Now move to the client dir and run the following command to start react in dev mode
`yarn dev`

To create a production build for the react app you can use
`yarn build`
