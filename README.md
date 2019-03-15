в папке c проектом

установка пакетов
npm install

запуск рабочей версии 
npm run dev

сборка проекта
npm run build

сборка докер имеджа
docker build . -t amst

запуск докер имеджа на порту 8080
docker run -itd --name amst --publish 8989:80 amst

остановка докер процесса
docker stop amst

удаление имеджа
docker rm $(docker ps -a | grep amst | awk '{ print $1}')