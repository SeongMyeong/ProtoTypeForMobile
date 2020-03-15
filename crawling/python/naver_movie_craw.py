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
        # movie_image_tb 만들기용
        moviInserteCodeList = []
        key = list(searchType.keys())[0]
        for movieData in searchType[key]:
            movieDataList  = []
            movieCodeList = []
            for movieKey in list(movieData.keys()):
                #movie_image_tb 만들기용
                #if movieKey == 'movieCode':
                    #movieCodeList.append(movieData[movieKey])

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
            #moviInserteCodeList.append(tuple(movieCodeList))

        print(movieInsertData)
        # insert db
        MOVIE_SQL = "REPLACE INTO MOVIE_TB VALUES(%s,%s, %s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
        mysqlDB.insertData(MOVIE_SQL, movieInsertData)
        #mysqlDB.insertData("REPLACE INTO MOVIE_IMAGE_TB(MOVIE_CODE) VALUE(%s)", moviInserteCodeList)
# naver full page image
def getNaverMovieFullImage(movieCode, mysqlDB):
    url = 'https://movie.naver.com/movie/bi/mi/photoViewPopup.nhn?movieCode=' + movieCode
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
    #beatifule soup
    soup = BeautifulSoup(r.text, "html.parser")
    posterFullImagePath = soup.find('img')['src']

    MOVIE_IMAGE_SQL = "REPLACE INTO MOVIE_IMAGE_TB(MOVIE_CODE, POSTER_FULL_IMAGE_PATH) VALUES(%s,%s)"
    mysqlDB.insertData(MOVIE_IMAGE_SQL, [( movieCode, posterFullImagePath)])

def getNaverMovieDetail(movieCode):
    url = 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=' + movieCode
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
    soup = BeautifulSoup(r.text, "html.parser")
    #관람객
    print(soup.select('#actualPointPersentBasic > div > span > span'))
    #
    print(soup.select('#content > div.article > div.mv_info_area > div.mv_info > div.main_score > div:nth-child(2) > div > a > div')[0].select('em'))
    #
    print(soup.select('#content > div.article > div.mv_info_area > div.mv_info > div.main_score > div.score.score_left > div.star_score')[0].select('em'))
    #줄거리
    print(soup.select('#content > div.article > div.section_group.section_group_frst > div:nth-child(1) > div > div.story_area > p'))

    # 바 그래프
    bargraph = soup.select('#content > div.article > div.mv_info_area > div.mv_info > div.viewing_graph > div > div.bar_graph > div.graph_box')
    for bar in bargraph:
        text = bar.getText().strip()
        text = text.splitlines()
        print("bar ", text[0], text[4])
    print(soup.select('#content > div.article > div.mv_info_area > div.mv_info > div.viewing_graph > div > div.donut_graph'))
    #도넛 그래프 못함

    #still img
    print(soup.select('#_MainPhotoArea > div.viewer > div')[0].find('img')['src'])

    #평점
    scoreList = soup.select('#content > div.article > div.section_group.section_group_frst > div:nth-child(5) > div:nth-child(2) > div.score_result > ul > li')
    for score in scoreList :
        print(score.select('div.star_score > em')[0].getText())
        print('score ', score.select('.score_reple > p')[0].getText().strip())



if __name__ == "__main__":
    TEST = False
    if TEST:
        pass
    else:
        mysqlDB = db.database()
        #절차 집어넣기

        # 1. 네이버 무비 현재 데이터 가져오기
        #getNaverMovieData('CURRENT', mysqlDB)
        #getNaverMovieData('POINT', mysqlDB)

        # MOVIE TB에 있는 MOVIE_CODE 가져오기
        #data = (mysqlDB.select_database_table('SELECT MOVIE_CODE FROM MOVIE_TB'))

        # MOVIE TB에 있는 CODE 이용해서 MOVIE_FULL_IMAGE_PATH 가져오기
        # for row_data in data:
        #     getNaverMovieFullImage(str(row_data[0]), mysqlDB)
        #     time.sleep(1)

        # 네이버 무비 디테일 가져오기
        getNaverMovieDetail('189001')
