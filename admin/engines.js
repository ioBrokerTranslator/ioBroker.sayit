// DONT Forget to update sayitEngines in blockly.js (If you change this table)

var sayitEngines = {
    "en":       {name: "Google - English",         engine: "google",  params: []},
    "de":       {name: "Google - Deutsch",         engine: "google",  params: []},
    "pl":       {name: "Google - Polski",          engine: "google",  params: []},
    "uk":       {name: "Google - Ukrainian",       engine: "google",  params: []},
    "ru":       {name: "Google - Русский",         engine: "google",  params: []},
    "it":       {name: "Google - Italiano",        engine: "google",  params: []},
    "pt":       {name: "Google - Português",       engine: "google",  params: []},
    "es":       {name: "Google - Espaniol",        engine: "google",  params: []},
    "fr":       {name: "Google - Français",        engine: "google",  params: []},
    "nl":       {name: "Google - Nederlands",      engine: "google",  params: []},
    "zh-CN":    {name: "Google - 简体中文",          engine: "google",  params: []},

    "ru_YA":    {name: "Yandex - Русский",         engine: "yandex",  params: ['key', 'voice', 'emotion', 'ill', 'drunk', 'robot'], voice: ['jane', 'zahar'], emotion: ['none', 'good', 'neutral', 'evil', 'mixed']},
    "ru_YA_CLOUD":   {name: "Yandex Cloud - Русский",   engine: "yandexCloud",  params: ['key', 'folderID', 'voice', 'emotion'], voice: ['alyss', 'oksana', 'jane', 'zahar', 'nick', 'ermil', 'alena Premium', 'filipp Premium'], emotion: [ 'good', 'neutral', 'evil']},

    "ru-RU_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "ru-RU",      ename: "Tatyana",    ssml: true, name: "Cloud - Русский - Татьяна"},
    "ru-RU_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "ru-RU",      ename: "Maxim",      ssml: true, name: "Cloud - Русский - Максим"},
    "de-DE_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "de-DE",      ename: "Marlene",    ssml: true, name: "Cloud - Deutsch - Marlene"},
    "de-DE_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "de-DE",      ename: "Hans",       ssml: true, name: "Cloud - Deutsch - Hans"},
    "de-DE_CLOUD_Female_Vicki": {gender: "Female", engine: "cloud",   params: ['cloud'], language: "de-DE",      ename: "Vicki",      ssml: true, name: "Cloud - Deutsch - Vicki"},
    "en-US_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Salli",      ssml: true, name: "Cloud - en-US - Female - Salli"},
    "en-US_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Joey",       ssml: true, name: "Cloud - en-US - Male - Joey"},
    "da-DK_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "da-DK",      ename: "Naja",       ssml: true, name: "Cloud - da-DK - Female - Naja"},
    "da-DK_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "da-DK",      ename: "Mads",       ssml: true, name: "Cloud - da-DK - Male - Mads"},
    "en-AU_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-AU",      ename: "Nicole",     ssml: true, name: "Cloud - en-AU - Female - Nicole"},
    "en-AU_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-AU",      ename: "Russell",    ssml: true, name: "Cloud - en-AU - Male - Russell"},
    "en-GB_CLOUD_Female_Amy":   {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-GB",      ename: "Amy",        ssml: true, name: "Cloud - en-GB - Female - Amy"},
    "en-GB_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-GB",      ename: "Brian",      ssml: true, name: "Cloud - en-GB - Male - Brian"},
    "en-GB_CLOUD_Female_Emma":  {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-GB",      ename: "Emma",       ssml: true, name: "Cloud - en-GB - Female - Emma"},
    "en-GB-WLS_CLOUD_Female":   {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-GB-WLS",  ename: "Gwyneth",    ssml: true, name: "Cloud - en-GB-WLS - Female - Gwyneth"},
    "en-GB-WLS_CLOUD_Male":     {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-GB-WLS",  ename: "Geraint",    ssml: true, name: "Cloud - en-GB-WLS - Male - Geraint"},
    "cy-GB_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "cy-GB",      ename: "Gwyneth",    ssml: true, name: "Cloud - cy-GB - Female - Gwyneth"},
    "cy-GB_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "cy-GB",      ename: "Geraint",    ssml: true, name: "Cloud - cy-GB - Male - Geraint"},
    "en-IN_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-IN",      ename: "Raveena",    ssml: true, name: "Cloud - en-IN - Female - Raveena"},
    "en-US_CLOUD_Male_Chipmunk":{gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Chipmunk",   ssml: true, name: "Cloud - en-US - Male - Chipmunk"},
    "en-US_CLOUD_Male_Eric":    {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Eric",       ssml: true, name: "Cloud - en-US - Male - Eric"},
    "en-US_CLOUD_Female_Ivy":   {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Ivy",        ssml: true, name: "Cloud - en-US - Female - Ivy"},
    "en-US_CLOUD_Female_Jennifer": {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-US",   ename: "Jennifer",   ssml: true, name: "Cloud - en-US - Female - Jennifer"},
    "en-US_CLOUD_Male_Justin":  {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "en-US",      ename: "Justin",     ssml: true, name: "Cloud - en-US - Male - Justin"},
    "en-US_CLOUD_Female_Kendra": {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-US",     ename: "Kendra",     ssml: true, name: "Cloud - en-US - Female - Kendra"},
    "en-US_CLOUD_Female_Kimberly": {gender: "Female", engine: "cloud",   params: ['cloud'], language: "en-US",   ename: "Kimberly",   ssml: true, name: "Cloud - en-US - Female - Kimberly"},
    "es-ES_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "es-ES",      ename: "Conchita",   ssml: true, name: "Cloud - es-ES - Female - Conchita"},
    "es-ES_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "es-ES",      ename: "Enrique",    ssml: true, name: "Cloud - es-ES - Male - Enrique"},
    "es-US_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "es-US",      ename: "Penelope",   ssml: true, name: "Cloud - es-US - Female - Penelope"},
    "es-US_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "es-US",      ename: "Miguel",     ssml: true, name: "Cloud - es-US - Male - Miguel"},
    "fr-CA_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "fr-CA",      ename: "Chantal",    ssml: true, name: "Cloud - fr-CA - Female - Chantal"},
    "fr-FR_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "fr-FR",      ename: "Celine",     ssml: true, name: "Cloud - fr-FR - Female - Celine"},
    "fr-FR_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "fr-FR",      ename: "Mathieu",    ssml: true, name: "Cloud - fr-FR - Male - Mathieu"},
    "is-IS_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "is-IS",      ename: "Dora",       ssml: true, name: "Cloud - is-IS - Female - Dora"},
    "is-IS_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "is-IS",      ename: "Karl",       ssml: true, name: "Cloud - is-IS - Male - Karl"},
    "it-IT_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "it-IT",      ename: "Carla",      ssml: true, name: "Cloud - it-IT - Female - Carla"},
    "it-IT_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "it-IT",      ename: "Giorgio",    ssml: true, name: "Cloud - it-IT - Male - Giorgio"},
    "nb-NO_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "nb-NO",      ename: "Liv",        ssml: true, name: "Cloud - nb-NO - Female - Liv"},
    "nl-NL_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "nl-NL",      ename: "Lotte",      ssml: true, name: "Cloud - nl-NL - Female - Lotte"},
    "nl-NL_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "nl-NL",      ename: "Ruben",      ssml: true, name: "Cloud - nl-NL - Male - Ruben"},
    "pl-PL_CLOUD_Female_Agnieszka":{gender: "Female", engine: "cloud",params: ['cloud'], language: "pl-PL",      ename: "Agnieszka",  ssml: true, name: "Cloud - pl-PL - Female - Agnieszka"},
    "pl-PL_CLOUD_Male_Jacek":   {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "pl-PL",      ename: "Jacek",      ssml: true, name: "Cloud - pl-PL - Male - Jacek"},
    "pl-PL_CLOUD_Female_Ewa":   {gender: "Female", engine: "cloud",   params: ['cloud'], language: "pl-PL",      ename: "Ewa",        ssml: true, name: "Cloud - pl-PL - Female - Ewa"},
    "pl-PL_CLOUD_Male_Jan":     {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "pl-PL",      ename: "Jan",        ssml: true, name: "Cloud - pl-PL - Male - Jan"},
    "pl-PL_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "pl-PL",      ename: "Maja",       ssml: true, name: "Cloud - pl-PL - Female - Maja"},
    "pt-BR_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "pt-BR",      ename: "Vitoria",    ssml: true, name: "Cloud - pt-BR - Female - Vitoria"},
    "pt-BR_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "pt-BR",      ename: "Ricardo",    ssml: true, name: "Cloud - pt-BR - Male - Ricardo"},
    "pt-BR_CLOUD_Female_Camila":{gender: "Female", engine: "cloud",   params: ['cloud'], language: "pt-BR",      ename: "Camila",     ssml: true, name: "Cloud - pt-BR - Female - Camila"},
    "pt-PT_CLOUD_Male":         {gender: "Male",   engine: "cloud",   params: ['cloud'], language: "pt-PT",      ename: "Cristiano",  ssml: true, name: "Cloud - pt-PT - Male - Cristiano"},
    "pt-PT_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "pt-PT",      ename: "Ines",       ssml: true, name: "Cloud - pt-PT - Female - Ines"},
    "ro-RO_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "ro-RO",      ename: "Carmen",     ssml: true, name: "Cloud - ro-RO - Female - Carmen"},
    "sv-SE_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "sv-SE",      ename: "Astrid",     ssml: true, name: "Cloud - sv-SE - Female - Astrid"},
    "tr-TR_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "tr-TR",      ename: "Filiz",      ssml: true, name: "Cloud - tr-TR - Female - Filiz"},
    "ko-KR_CLOUD_Female":       {gender: "Female", engine: "cloud",   params: ['cloud'], language: "ko-KR",      ename: "Seoyeon",    ssml: true, name: "Cloud - ko-KR - Female - Seoyeon"},

    "en-US":    {name: "PicoTTS - Englisch US",    engine: "PicoTTS", params: []},
    "en-GB":    {name: "PicoTTS - Englisch GB",    engine: "PicoTTS", params: []},
    "de-DE":    {name: "PicoTTS - Deutsch",        engine: "PicoTTS", params: []},
    "it-IT":    {name: "PicoTTS - Italiano",       engine: "PicoTTS", params: []},
    "es-ES":    {name: "PicoTTS - Espaniol",       engine: "PicoTTS", params: []},
    "fr-FR":    {name: "PicoTTS - Français",       engine: "PicoTTS", params: []},

    "en_CoquiTTS":    {name: "CoquiTTS - English",  engine: "CoquiTTS", params: []},
    "es_CoquiTTS":    {name: "CoquiTTS - Espaniol", engine: "CoquiTTS", params: []},
    "fr_CoquiTTS":    {name: "CoquiTTS - Français", engine: "CoquiTTS", params: []},
    "de_CoquiTTS":    {name: "CoquiTTS - Deutsch",  engine: "CoquiTTS", params: []},
    "nl_CoquiTTS":    {name: "CoquiTTS - Dutch",    engine: "CoquiTTS", params: []},
    "ja_CoquiTTS":    {name: "CoquiTTS - Japan",    engine: "CoquiTTS", params: []},

    "ru-RU_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "ru-RU",      ename: "Tatyana",    ssml: true, name: "AWS Polly - Русский - Татьяна"},
    "ru-RU_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "ru-RU",      ename: "Maxim",      ssml: true, name: "AWS Polly - Русский - Максим"},
    "de-DE_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "de-DE",      ename: "Marlene",    ssml: true, name: "AWS Polly - Deutsch - Marlene"},
    "de-DE_AP_Female_Vicki":    {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "de-DE",      ename: "Vicki",      ssml: true, name: "AWS Polly - Deutsch - Vicki"},
    "de-DE_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "de-DE",      ename: "Hans",       ssml: true, name: "AWS Polly - Deutsch - Hans"},
    "en-US_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Salli",      ssml: true, name: "AWS Polly - en-US - Female - Salli"},
    "en-US_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Joey",       ssml: true, name: "AWS Polly - en-US - Male - Joey"},
    "da-DK_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "da-DK",      ename: "Naja",       ssml: true, name: "AWS Polly - da-DK - Female - Naja"},
    "da-DK_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "da-DK",      ename: "Mads",       ssml: true, name: "AWS Polly - da-DK - Male - Mads"},
    "en-AU_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-AU",      ename: "Nicole",     ssml: true, name: "AWS Polly - en-AU - Female - Nicole"},
    "en-AU_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-AU",      ename: "Russell",    ssml: true, name: "AWS Polly - en-AU - Male - Russell"},
    "en-GB_AP_Female_Amy":      {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-GB",      ename: "Amy",        ssml: true, name: "AWS Polly - en-GB - Female - Amy"},
    "en-GB_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-GB",      ename: "Brian",      ssml: true, name: "AWS Polly - en-GB - Male - Brian"},
    "en-GB_AP_Female_Emma":     {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-GB",      ename: "Emma",       ssml: true, name: "AWS Polly - en-GB - Female - Emma"},
    "en-GB-WLS_AP_Female":      {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-GB-WLS",  ename: "Gwyneth",    ssml: true, name: "AWS Polly - en-GB-WLS - Female - Gwyneth"},
    "en-GB-WLS_AP_Male":        {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-GB-WLS",  ename: "Geraint",    ssml: true, name: "AWS Polly - en-GB-WLS - Male - Geraint"},
    "cy-GB_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "cy-GB",      ename: "Gwyneth",    ssml: true, name: "AWS Polly - cy-GB - Female - Gwyneth"},
    "cy-GB_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "cy-GB",      ename: "Geraint",    ssml: true, name: "AWS Polly - cy-GB - Male - Geraint"},
    "en-IN_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-IN",      ename: "Raveena",    ssml: true, name: "AWS Polly - en-IN - Female - Raveena"},
    "en-US_AP_Male_Chipmunk":   {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Chipmunk",   ssml: true, name: "AWS Polly - en-US - Male - Chipmunk"},
    "en-US_AP_Male_Eric":       {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Eric",       ssml: true, name: "AWS Polly - en-US - Male - Eric"},
    "en-US_AP_Female_Ivy":      {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Ivy",        ssml: true, name: "AWS Polly - en-US - Female - Ivy"},
    "en-US_AP_Female_Jennifer": {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Jennifer",   ssml: true, name: "AWS Polly - en-US - Female - Jennifer"},
    "en-US_AP_Male_Justin":     {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Justin",     ssml: true, name: "AWS Polly - en-US - Male - Justin"},
    "en-US_AP_Female_Kendra":   {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Kendra",     ssml: true, name: "AWS Polly - en-US - Female - Kendra"},
    "en-US_AP_Female_Kimberly": {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "en-US",      ename: "Kimberly",   ssml: true, name: "AWS Polly - en-US - Female - Kimberly"},
    "es-ES_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "es-ES",      ename: "Conchita",   ssml: true, name: "AWS Polly - es-ES - Female - Conchita"},
    "es-ES_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "es-ES",      ename: "Enrique",    ssml: true, name: "AWS Polly - es-ES - Male - Enrique"},
    "es-US_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "es-US",      ename: "Penelope",   ssml: true, name: "AWS Polly - es-US - Female - Penelope"},
    "es-US_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "es-US",      ename: "Miguel",     ssml: true, name: "AWS Polly - es-US - Male - Miguel"},
    "fr-CA_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "fr-CA",      ename: "Chantal",    ssml: true, name: "AWS Polly - fr-CA - Female - Chantal"},
    "fr-FR_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "fr-FR",      ename: "Celine",     ssml: true, name: "AWS Polly - fr-FR - Female - Celine"},
    "fr-FR_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "fr-FR",      ename: "Mathieu",    ssml: true, name: "AWS Polly - fr-FR - Male - Mathieu"},
    "is-IS_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "is-IS",      ename: "Dora",       ssml: true, name: "AWS Polly - is-IS - Female - Dora"},
    "is-IS_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "is-IS",      ename: "Karl",       ssml: true, name: "AWS Polly - is-IS - Male - Karl"},
    "it-IT_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "it-IT",      ename: "Carla",      ssml: true, name: "AWS Polly - it-IT - Female - Carla"},
    "it-IT_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "it-IT",      ename: "Giorgio",    ssml: true, name: "AWS Polly - it-IT - Male - Giorgio"},
    "nb-NO_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "nb-NO",      ename: "Liv",        ssml: true, name: "AWS Polly - nb-NO - Female - Liv"},
    "nl-NL_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "nl-NL",      ename: "Lotte",      ssml: true, name: "AWS Polly - nl-NL - Female - Lotte"},
    "nl-NL_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "nl-NL",      ename: "Ruben",      ssml: true, name: "AWS Polly - nl-NL - Male - Ruben"},
    "pl-PL_AP_Female_Agnieszka":{gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pl-PL",      ename: "Agnieszka",  ssml: true, name: "AWS Polly - pl-PL - Female - Agnieszka"},
    "pl-PL_AP_Male_Jacek":      {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pl-PL",      ename: "Jacek",      ssml: true, name: "AWS Polly - pl-PL - Male - Jacek"},
    "pl-PL_AP_Female_Ewa":      {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pl-PL",      ename: "Ewa",        ssml: true, name: "AWS Polly - pl-PL - Female - Ewa"},
    "pl-PL_AP_Male_Jan":        {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pl-PL",      ename: "Jan",        ssml: true, name: "AWS Polly - pl-PL - Male - Jan"},
    "pl-PL_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pl-PL",      ename: "Maja",       ssml: true, name: "AWS Polly - pl-PL - Female - Maja"},
    "pt-BR_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pt-BR",      ename: "Vitoria",    ssml: true, name: "AWS Polly - pt-BR - Female - Vitoria"},
    "pt-BR_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pt-BR",      ename: "Ricardo",    ssml: true, name: "AWS Polly - pt-BR - Male - Ricardo"},
    "pt-PT_AP_Male":            {gender: "Male",   engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pt-PT",      ename: "Cristiano",  ssml: true, name: "AWS Polly - pt-PT - Male - Cristiano"},
    "pt-PT_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "pt-PT",      ename: "Ines",       ssml: true, name: "AWS Polly - pt-PT - Female - Ines"},
    "ro-RO_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "ro-RO",      ename: "Carmen",     ssml: true, name: "AWS Polly - ro-RO - Female - Carmen"},
    "sv-SE_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "sv-SE",      ename: "Astrid",     ssml: true, name: "AWS Polly - sv-SE - Female - Astrid"},
    "tr-TR_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "tr-TR",      ename: "Filiz",      ssml: true, name: "AWS Polly - tr-TR - Female - Filiz"},
    "ko-KR_AP_Female":          {gender: "Female", engine: "polly",   params: ['awsAccessKey', 'awsSecretKey', 'awsRegion'], language: "ko-KR",      ename: "Seoyeon",    ssml: true, name: "AWS Polly - ko-KR - Female - Seoyeon"}
};

var sayitOptions = {
    "browser":    {name: "Browser",           params: ['engine', 'cache', 'instance'],                       mp3Required: true,  checkLength: true,  func: (typeof sayItBrowser    !== 'undefined') ? sayItBrowser    : null, server: true,  libs: ['fs', 'crypto', 'http']},
    "mp24ftp":    {name: "MediaPlayer24+FTP", params: ['engine', 'cache', 'server', 'port', 'user', 'pass'], mp3Required: true,  checkLength: true,  func: (typeof sayItMP24ftp    !== 'undefined') ? sayItMP24ftp    : null, server: false, libs: ['fs', 'crypto', 'http', 'jsftp']},
    "mp24":       {name: "MediaPlayer24",     params: ['server'],                                            mp3Required: false, checkLength: true,  func: (typeof sayItMP24       !== 'undefined') ? sayItMP24       : null, server: false, libs: ['fs', 'crypto', 'http']},
    "system":     {name: "System",            params: ['engine', 'cache'],                                   mp3Required: true,  checkLength: false, func: (typeof sayItSystem     !== 'undefined') ? sayItSystem     : null, server: false, libs: ['fs', 'crypto', 'http', 'child_process', 'os']},
    "windows":    {name: "Windows default",   params: [],                                                    mp3Required: false, checkLength: true,  func: (typeof sayItWindows    !== 'undefined') ? sayItWindows    : null, server: false, libs: ['fs', 'child_process']},
    "sonos":      {name: "Sonos",             params: ['engine', 'cache', 'device', 'web', 'webServer'],     mp3Required: true,  checkLength: true,  func: (typeof sayItSonos      !== 'undefined') ? sayItSonos      : null, server: true,  libs: ['fs', 'crypto', 'http']},
    "heos":       {name: "Heos",              params: ['engine', 'cache', 'heos_device', 'web', 'webServer'],mp3Required: true,  checkLength: true,  func: (typeof sayItHeos       !== 'undefined') ? sayItHeos       : null, server: true,  libs: ['fs', 'crypto', 'http']},
    "chromecast": {name: "Chromecast",        params: ['engine', 'cache', 'cDevice', 'web', 'webServer'],    mp3Required: true,  checkLength: true,  func: (typeof sayItChromecast !== 'undefined') ? sayItChromecast : null, server: true,  libs: ['fs', 'crypto', 'http']},
    "mpd":        {name: "MPD",               params: ['engine', 'cache', 'mpd_device', 'web', 'webServer'], mp3Required: true,  checkLength: true,  func: (typeof sayItMpd        !== 'undefined') ? sayItMpd        : null, server: true,  libs: ['fs', 'crypto', 'http']},
    "googleHome": {name: "Google Home",       params: ['engine', 'cache', 'server', 'web', 'webServer'],     mp3Required: true,  checkLength: true,  func: (typeof sayItGoogleHome !== 'undefined') ? sayItGoogleHome : null, server: true,  libs: ['fs', 'crypto', 'http', 'castv2-client']}
};

if (typeof module !== 'undefined' && module.parent) {
    module.exports.sayitEngines = sayitEngines;
    module.exports.sayitOptions = sayitOptions;
}
