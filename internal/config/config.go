package config

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/dustin/go-humanize"
	"github.com/spf13/viper"
)

type Plugin struct {
	Name string         `mapstructure:"name"`
	Args map[string]any `mapstructure:"args"`
}

func (p Plugin) GetArgs() map[string]any {
	if p.Args == nil {
		return map[string]any{}
	}

	return p.Args
}

type Config struct {
	AppPort        string `mapstructure:"app_port"`
	GrpcPort       string `mapstructure:"grpc_port"`
	Debug          bool   `mapstructure:"debug"`
	LogChannel     string `mapstructure:"log_channel"`
	ProfileEnabled bool   `mapstructure:"profile_enabled"`
	CacheDriver    string `mapstructure:"cache_driver"`

	AdminPassword string `mapstructure:"admin_password"`
	PrivateKey    string `mapstructure:"private_key"`

	WsSenderPlugin Plugin `mapstructure:"ws_sender_plugin"`
	PicturePlugin  Plugin `mapstructure:"picture_plugin"`

	UploadDir     string `mapstructure:"upload_dir"`
	UploadMaxSize string `mapstructure:"upload_max_size"`

	JaegerUser          string `mapstructure:"jaeger_user"`
	JaegerPassword      string `mapstructure:"jaeger_password"`
	JaegerAgentHostPort string `mapstructure:"jaeger_agent_host_port"`

	// mysql
	DBDriver   string `mapstructure:"db_driver"`
	DBHost     string `mapstructure:"db_host"`
	DBPort     string `mapstructure:"db_port"`
	DBUsername string `mapstructure:"db_username"`
	DBPassword string `mapstructure:"db_password"`
	DBDatabase string `mapstructure:"db_database"`

	Oidc []OidcSetting `mapstructure:"oidc"`
}

type OidcSetting struct {
	Name         string `mapstructure:"name"`
	Enabled      bool   `mapstructure:"enabled"`
	ProviderUrl  string `mapstructure:"provider_url"`
	ClientID     string `mapstructure:"client_id"`
	ClientSecret string `mapstructure:"client_secret"`
	RedirectUrl  string `mapstructure:"redirect_url"`
}

func Init(cfgFile string) *Config {
	if cfgFile != "" {
		viper.SetConfigFile(cfgFile)
	} else {
		dir, err := os.Getwd()
		if err != nil {
			log.Fatal(err)
		}

		viper.AddConfigPath(dir)
		viper.SetConfigName("config")
		viper.SetConfigType("yaml")
	}

	viper.AutomaticEnv()

	if err := viper.ReadInConfig(); err != nil {
		log.Fatal(err)
	}

	viper.SetDefault("cache_driver", "db")

	viper.SetDefault("ws_sender_plugin", map[string]any{
		"name": "ws_sender_memory",
		"args": nil,
	})

	viper.SetDefault("picture_plugin", map[string]any{
		"name": "picture_bing",
		"args": nil,
	})

	cfg := &Config{}

	viper.Unmarshal(&cfg)
	if cfg.GrpcPort == "" {
		port, err := GetFreePort()
		if err != nil {
			return nil
		}
		cfg.GrpcPort = fmt.Sprintf("%d", port)
	}

	return cfg
}

func (c *Config) MaxUploadSize() uint64 {
	bytes, err := humanize.ParseBytes(c.UploadMaxSize)
	if err != nil {
		return 50 << 20
	}
	return bytes
}

func GetFreePort() (int, error) {
	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return 0, err
	}
	defer ln.Close()

	// get port
	tcpAddr, ok := ln.Addr().(*net.TCPAddr)
	if !ok {
		return 0, fmt.Errorf("invalid listen address: %q", ln.Addr().String())
	}

	return tcpAddr.Port, nil
}
