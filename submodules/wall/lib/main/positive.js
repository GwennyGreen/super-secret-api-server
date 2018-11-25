import anime from 'animejs'

import * as bars from '../bars/positive'
import PhraseEngine from '../phrase_engine.js'

let SOURCE_URL = 'http://localhost:5101/api/wall/v1/positive/phrases'

bars.animate()
new PhraseEngine({ sourceUrl: SOURCE_URL }).run()
