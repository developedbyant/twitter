export interface TweetData {
    created_at:                string;
    id:                        number;
    id_str:                    string;
    text:                      string;
    truncated:                 boolean;
    entities:                  Entities;
    source:                    string;
    in_reply_to_status_id:     null;
    in_reply_to_status_id_str: null;
    in_reply_to_user_id:       null;
    in_reply_to_user_id_str:   null;
    in_reply_to_screen_name:   null;
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
    possibly_sensitive:        boolean;
    lang:                      string;
}

export interface Entities {
    hashtags:      any[];
    symbols:       any[];
    user_mentions: any[];
    urls:          URL[];
}

export interface URL {
    url:          string;
    expanded_url: string;
    display_url:  string;
    indices:      number[];
}

export interface User {
    id:     number;
    id_str: string;
}
