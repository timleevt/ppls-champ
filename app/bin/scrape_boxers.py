from bs4 import BeautifulSoup
import requests

org_url = {
    'boxrec':'http://boxrec.com/en/ratings',
    'tbrb':'http://tbrb.org/p4p',
    'thering':'https://www.ringtv.com/ratings/'
}

def parse_html(url):
    print(f'Retrieving HTML from url: {url}')
    html = requests.get(url)
    return BeautifulSoup(html.text, 'html.parser')

def get_boxrec_ranking():
    boxrec_html = parse_html(org_url.get('boxrec'))
    # Retrieving fighter names. Note these still have the HTML tags
    boxers = boxrec_html.find_all(class_='personLink')
    return boxers

# This one still has a header in it..
def get_tbrb_ranking():
    tbrb_html = parse_html(org_url.get('tbrb'))
    # Retrieving fighter names. Note these still have the HTML tags
    boxers = tbrb_html.find_all(id='n2')[1:] # Splicing from 1 to avoid retrieving "Name"
    return boxers

def get_the_ring_ranking():
    the_ring_html = parse_html(org_url.get('thering'))
    # Retrieving fighter names. Note these still have the HTML tags
    boxers = the_ring_html.find_all(class_='name')
    return boxers

def ranking_to_file(rankings, filename):
    # Join all boxers from the rankings list into a string separated by comma
    boxers = (',').join([boxer.string for boxer in rankings])
    try:
        with open(filename, 'w') as f:
            f.write(boxers)
    except IOError as err:
        print(err)
    except Exception as err:
        print(err)
    print(f'Write to {filename} complete')

if __name__ == '__main__':
    ranking_to_file(get_tbrb_ranking(), '../data/tbrb.txt')
    ranking_to_file(get_boxrec_ranking(), '../data/boxrec.txt')
    ranking_to_file(get_the_ring_ranking(), '../data/thering.txt')