dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t johnflynnphotos-image ./bin/release/netcoreapp2.2/publish

docker tag johnflynnphotos-image registry.heroku.com/johnflynnphotos/web

docker push registry.heroku.com/johnflynnphotos/web

heroku container:release web -a johnflynnphotos

# sudo chmod 755 deploy.sh
# ./deploy.sh