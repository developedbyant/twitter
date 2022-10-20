export interface FollowingsData {
    users:               User[];
    next_cursor:         number;
    next_cursor_str:     string;
    previous_cursor:     number;
    previous_cursor_str: string;
    total_count:         null;
} 

export interface User {
    id:                                 number;
    id_str:                             string;
    name:                               string;
    screen_name:                        string;
    location:                           string;
    description:                        string;
    url:                                string;
    entities:                           Entities;
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
    muting:                             null;
    blocking:                           null;
    blocked_by:                         null;
    translator_type:                    string;
    withheld_in_countries:              any[];
}

export interface Entities {
    url:         Description;
    description: Description;
}

export interface Description {
    urls: URL[];
}

export interface URL {
    url:          string;
    expanded_url: string;
    display_url:  string;
    indices:      number[];
}
