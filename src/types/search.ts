export interface SearchData {
    statuses:        Status[];
    search_metadata: SearchMetadata;
} 

export interface SearchMetadata {
    completed_in: number;
    max_id:       number;
    max_id_str:   string;
    next_results: string;
    query:        string;
    refresh_url:  string;
    count:        number;
    since_id:     number;
    since_id_str: string;
}

export interface Status {
    created_at:                string;
    id:                        number;
    id_str:                    string;
    text:                      string;
    truncated:                 boolean;
    entities:                  StatusEntities;
    metadata:                  Metadata;
    source:                    string;
    in_reply_to_status_id:     number | null;
    in_reply_to_status_id_str: null | string;
    in_reply_to_user_id:       number | null;
    in_reply_to_user_id_str:   null | string;
    in_reply_to_screen_name:   null | string;
    user:                      User;
    geo:                       null;
    coordinates:               null;
    place:                     null;
    contributors:              null;
    is_quote_status:           boolean;
    retweet_count:             number;
    favorite_count:            number;
    favorited:                 boolean;
    retweeted:                 boolean;
    lang:                      string;
    possibly_sensitive?:       boolean;
}

export interface StatusEntities {
    hashtags:      any[];
    symbols:       Symbol[];
    user_mentions: any[];
    urls:          URL[];
}

export interface Symbol {
    text:    string;
    indices: number[];
}

export interface URL {
    url:          string;
    expanded_url: string;
    display_url:  string;
    indices:      number[];
}

export interface Metadata {
    iso_language_code: string;
    result_type:       string;
}

export interface User {
    id:                                 number;
    id_str:                             string;
    name:                               string;
    screen_name:                        string;
    location:                           string;
    description:                        string;
    url:                                string;
    entities:                           UserEntities;
    protected:                          boolean;
    followers_count:                    number;
    friends_count:                      number;
    listed_count:                       number;
    created_at:                         string;
    favourites_count:                   number;
    utc_offset:                         null;
    time_zone:                          null;
    geo_enabled:                        boolean;
    verified:                           boolean;
    statuses_count:                     number;
    lang:                               null;
    contributors_enabled:               boolean;
    is_translator:                      boolean;
    is_translation_enabled:             boolean;
    profile_background_color:           string;
    profile_background_image_url:       null | string;
    profile_background_image_url_https: null | string;
    profile_background_tile:            boolean;
    profile_image_url:                  string;
    profile_image_url_https:            string;
    profile_banner_url:                 string;
    profile_link_color:                 string;
    profile_sidebar_border_color:       string;
    profile_sidebar_fill_color:         string;
    profile_text_color:                 string;
    profile_use_background_image:       boolean;
    has_extended_profile:               boolean;
    default_profile:                    boolean;
    default_profile_image:              boolean;
    following:                          null;
    follow_request_sent:                null;
    notifications:                      null;
    translator_type:                    string;
    withheld_in_countries:              any[];
}

export interface UserEntities {
    url:         Description;
    description: Description;
}

export interface Description {
    urls: URL[];
}
