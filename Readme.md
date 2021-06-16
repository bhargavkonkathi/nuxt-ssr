1. Install dependencies inside src using yarn install
2. Install dependencies in functions folder
3. Run yarn build inside src it will create nuxt folder inside folder. 
4. Copy and move all contents from functions/nuxt/dist/client folder to public/client folder.
5. Now run functions serve --only functions,hosting -p 5004 
6. You should see build firebase hosting running and build running.
7. Deploy firebase deploy --only functions,hosting.