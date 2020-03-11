# -*- coding: utf-8 -*-
import requests
import database as db
from bs4 import BeautifulSoup
import time
import re

def getNaverMovieData(type, mysqlDB):
    url = 'https://movie.naver.com/movieChartDefaultJson.nhn?type=' + type
    payload = {}
    headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'sec-fetch-mode': 'nested-navigate',
        'sec-fetch-site': 'same-origin',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
        'referer': 'https://movie.naver.com/'
    }

    r = requests.get(url, params=payload, headers=headers)
    # r = requests.post(url, data=payload, headers=headers, cookies = self.cookies_dict)
    #print(r.json().movieChartList
    #movieChartList = r.json().movieChartList
    for searchType in r.json()['movieChartList']:
        movieInsertData = []
        key = list(searchType.keys())[0]
        for movieData in searchType[key]:
            movieDataList  = []
            for movieKey in list(movieData.keys()):
                #pass 시킴
                if movieKey == 'korGradeList':
                    movieDataList.append('codeEmpty')
                    movieDataList.append('nameEmpty')
                    continue
                elif movieKey == 'lastKoreanGrade':
                    #예외처리 두개는 짝지어서 내려옴
                    #무비키가 있고 code 가 code 가 키 값으로 안에 있을때
                    if movieData[movieKey] and 'code' in movieData[movieKey]:
                        movieDataList.append(movieData[movieKey]['code'])
                        movieDataList.append(movieData[movieKey]['name'])
                    #내려 오지 않을경우 sql 짝 맞추기용
                    else:
                        movieDataList.append('codeEmpty')
                        movieDataList.append('nameEmpty')
                    continue
                # pass 시킴
                elif movieKey == 'usGradeList':
                    movieDataList.append('codeEmpty')
                    movieDataList.append('nameEmpty')
                    continue
                elif movieKey == 'lastUsGrade':
                    if movieData[movieKey] and 'code' in movieData[movieKey]:
                        movieDataList.append(movieData[movieKey]['code'])
                        movieDataList.append(movieData[movieKey]['name'])
                    # 내려 오지 않을경우 sql 짝 맞추기용
                    else:
                        movieDataList.append('codeEmpty')
                        movieDataList.append('nameEmpty')
                    continue

                movieDataList.append(movieData[movieKey])
            #mysql insert용 ,type 끼어넣기
            movieDataList.insert(1, key)
            #멀티플 insert는 tuple 변환 해줘야함
            movieInsertData.append(tuple(movieDataList))

        print(movieInsertData)
        # insert db
        MOVIE_SQL = "REPLACE INTO MOVIE_TB VALUES(%s,%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        mysqlDB.insertData(MOVIE_SQL, movieInsertData)

if __name__ == "__main__":
    TEST = False
    if TEST:
        pass
    else:
        mysqlDB = db.database()
        getNaverMovieData('CURRENT', mysqlDB)
        getNaverMovieData('POINT', mysqlDB)

